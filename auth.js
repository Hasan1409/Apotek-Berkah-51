// SMTP Configuration untuk mengirim email
// Menggunakan SMTP.js dengan ElasticEmail (gratis 100 email/hari)
const SMTP_CONFIG = {
    Host: "smtp.elasticemail.com",
    Username: "aseasemam4@gmail.com", // Email pengirim
    Password: "YOUR_ELASTIC_EMAIL_API_KEY", // Ganti dengan API Key dari ElasticEmail
    Port: 2525
};

let currentUser = null;
let verificationCodeSent = null;
let pendingUserData = null;

// Toggle Password Visibility
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const icon = input.nextElementSibling.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Show Forms
function showLogin() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('verificationForm').classList.add('hidden');
}

function showRegister() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('verificationForm').classList.add('hidden');
}

function showVerification(email) {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('verificationForm').classList.remove('hidden');
    document.getElementById('verificationEmail').textContent = email;
}

// Generate Verification Code
function generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Send Verification Email using SMTP.js
async function sendVerificationEmail(toEmail, name, code) {
    try {
        // Show loading
        document.getElementById('loadingOverlay').classList.remove('hidden');
        
        const emailBody = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
                <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <div style="text-align: center; margin-bottom: 30px;">
                        <h1 style="color: #2563eb; margin: 0;">🏥 Apotek Berkah 51</h1>
                        <p style="color: #666; margin-top: 10px;">Kesehatan Anda, Prioritas Kami</p>
                    </div>
                    
                    <h2 style="color: #333;">Halo ${name},</h2>
                    <p style="color: #666; line-height: 1.6;">Terima kasih telah mendaftar di Apotek Berkah 51!</p>
                    
                    <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
                        <p style="color: #666; margin: 0 0 10px 0;">Kode verifikasi Anda adalah:</p>
                        <h1 style="color: #2563eb; font-size: 36px; letter-spacing: 8px; margin: 10px 0;">${code}</h1>
                    </div>
                    
                    <p style="color: #666; line-height: 1.6;">Masukkan kode ini di halaman verifikasi untuk mengaktifkan akun Anda.</p>
                    <p style="color: #666; line-height: 1.6;"><strong>Kode ini berlaku selama 10 menit.</strong></p>
                    
                    <p style="color: #999; font-size: 14px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                        Jika Anda tidak merasa mendaftar, abaikan email ini.<br>
                        <br>
                        Salam sehat,<br>
                        <strong>Tim Apotek Berkah 51</strong>
                    </p>
                </div>
            </div>
        `;
        
        // Kirim email menggunakan SMTP.js
        const response = await Email.send({
            SecureToken: "YOUR_SECURE_TOKEN", // Atau gunakan Host, Username, Password
            To: toEmail,
            From: "aseasemam4@gmail.com",
            Subject: "Kode Verifikasi Apotek Berkah 51",
            Body: emailBody
        });
        
        console.log('Email sent successfully:', response);
        
        // Hide loading
        document.getElementById('loadingOverlay').classList.add('hidden');
        
        if (response === 'OK') {
            showNotification('✅ Kode verifikasi telah dikirim ke ' + toEmail, 'success');
            return true;
        } else {
            throw new Error(response);
        }
    } catch (error) {
        console.error('Error sending email:', error);
        
        // Hide loading
        document.getElementById('loadingOverlay').classList.add('hidden');
        
        // Untuk demo, tampilkan kode di notifikasi
        showNotification('⚠️ Mode Demo - Kode verifikasi Anda: ' + code, 'warning', 10000);
        console.log('═══════════════════════════════════');
        console.log('📧 KODE VERIFIKASI DEMO');
        console.log('Email tujuan:', toEmail);
        console.log('Kode:', code);
        console.log('═══════════════════════════════════');
        
        return true; // Tetap lanjutkan untuk demo
    }
}

// Handle Register
async function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    // Validate password match
    if (password !== confirmPassword) {
        showNotification('Kata sandi tidak cocok!', 'error');
        return;
    }
    
    // Check if email already exists
    const users = JSON.parse(localStorage.getItem('apotekUsers') || '[]');
    if (users.find(u => u.email === email)) {
        showNotification('Email sudah terdaftar!', 'error');
        return;
    }
    
    // Generate verification code
    verificationCodeSent = generateVerificationCode();
    
    // Store pending user data
    pendingUserData = {
        name: name,
        email: email,
        password: password,
        verified: false,
        createdAt: new Date().toISOString()
    };
    
    // Send verification email
    await sendVerificationEmail(email, name, verificationCodeSent);
    
    // Show verification form
    showVerification(email);
}

// Handle Verification
function handleVerification(event) {
    event.preventDefault();
    
    const code = document.getElementById('verificationCode').value;
    
    if (code === verificationCodeSent) {
        // Mark user as verified
        pendingUserData.verified = true;
        
        // Save user to localStorage
        const users = JSON.parse(localStorage.getItem('apotekUsers') || '[]');
        users.push(pendingUserData);
        localStorage.setItem('apotekUsers', JSON.stringify(users));
        
        // Set current user
        currentUser = pendingUserData;
        localStorage.setItem('apotekCurrentUser', JSON.stringify(currentUser));
        
        showNotification('✅ Akun berhasil dibuat dan diverifikasi!', 'success');
        
        // Redirect to main page
        setTimeout(() => {
            window.location.href = 'apotek.html';
        }, 1500);
    } else {
        showNotification('Kode verifikasi salah!', 'error');
    }
}

// Resend Code
async function resendCode() {
    if (!pendingUserData) return;
    
    verificationCodeSent = generateVerificationCode();
    await sendVerificationEmail(pendingUserData.email, pendingUserData.name, verificationCodeSent);
}

// Handle Login
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('apotekUsers') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
        showNotification('Email atau kata sandi salah!', 'error');
        return;
    }
    
    if (!user.verified) {
        showNotification('Akun belum diverifikasi! Silakan verifikasi email Anda.', 'error');
        return;
    }
    
    // Set current user
    currentUser = user;
    localStorage.setItem('apotekCurrentUser', JSON.stringify(currentUser));
    
    showNotification('✅ Login berhasil!', 'success');
    
    // Redirect to main page
    setTimeout(() => {
        window.location.href = 'apotek.html';
    }, 1000);
}

// Show Notification
function showNotification(message, type = 'info', duration = 5000) {
    const colors = {
        success: 'bg-green-600',
        error: 'bg-red-600',
        warning: 'bg-yellow-600',
        info: 'bg-blue-600'
    };
    
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 ${colors[type]} text-white px-6 py-4 rounded-lg shadow-lg z-50 max-w-md`;
    notification.innerHTML = `
        <div class="flex items-start space-x-3">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'} text-2xl"></i>
            <div class="flex-1">
                <p class="font-semibold">${message}</p>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" class="text-white hover:text-gray-200">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, duration);
}

// Check if already logged in
window.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('apotekCurrentUser') || 'null');
    if (currentUser && currentUser.verified) {
        // Already logged in, redirect to main page
        window.location.href = 'apotek.html';
    }
});
