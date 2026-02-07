// Data Produk Apotek
const products = [
    // Demam
    { id: 1, name: 'Paracetamol 500mg', price: 8000, image: '💊', category: 'Demam', desc: 'Obat penurun panas' },
    { id: 2, name: 'Sanmol Sirup', price: 15000, image: '🍶', category: 'Demam', desc: 'Sirup penurun demam anak' },
    { id: 3, name: 'Tempra Forte', price: 25000, image: '💊', category: 'Demam', desc: 'Obat demam dewasa' },
    { id: 4, name: 'Biogesic', price: 12000, image: '💊', category: 'Demam', desc: 'Pereda demam & nyeri' },
    
    // Batuk & Flu
    { id: 5, name: 'OBH Combi', price: 18000, image: '🍶', category: 'Batuk', desc: 'Obat batuk berdahak' },
    { id: 6, name: 'Woods Peppermint', price: 22000, image: '🍶', category: 'Batuk', desc: 'Obat batuk herbal' },
    { id: 7, name: 'Actifed', price: 28000, image: '💊', category: 'Batuk', desc: 'Obat flu & pilek' },
    { id: 8, name: 'Komix Herbal', price: 12000, image: '📦', category: 'Batuk', desc: 'Obat batuk sachet' },
    { id: 9, name: 'Decolgen', price: 15000, image: '💊', category: 'Batuk', desc: 'Obat flu & demam' },
    { id: 10, name: 'Mixagrip', price: 10000, image: '💊', category: 'Batuk', desc: 'Obat flu tablet' },
    
    // Pencernaan
    { id: 11, name: 'Promag Tablet', price: 8000, image: '💊', category: 'Pencernaan', desc: 'Obat maag' },
    { id: 12, name: 'Mylanta Sirup', price: 25000, image: '🍶', category: 'Pencernaan', desc: 'Obat maag cair' },
    { id: 13, name: 'Entrostop', price: 12000, image: '💊', category: 'Pencernaan', desc: 'Obat diare' },
    { id: 14, name: 'New Diatabs', price: 15000, image: '💊', category: 'Pencernaan', desc: 'Obat diare tablet' },
    { id: 15, name: 'Dulcolax', price: 18000, image: '💊', category: 'Pencernaan', desc: 'Obat sembelit' },
    { id: 16, name: 'Polysilane', price: 22000, image: '🍶', category: 'Pencernaan', desc: 'Obat kembung' },
    
    // Nyeri
    { id: 17, name: 'Bodrex', price: 10000, image: '💊', category: 'Nyeri', desc: 'Obat sakit kepala' },
    { id: 18, name: 'Paramex', price: 8000, image: '💊', category: 'Nyeri', desc: 'Pereda nyeri kepala' },
    { id: 19, name: 'Oskadon', price: 12000, image: '💊', category: 'Nyeri', desc: 'Obat pusing' },
    { id: 20, name: 'Neuralgin', price: 15000, image: '💊', category: 'Nyeri', desc: 'Pereda nyeri otot' },
    { id: 21, name: 'Counterpain', price: 35000, image: '🧴', category: 'Nyeri', desc: 'Krim pereda nyeri' },
    
    // Alergi
    { id: 22, name: 'CTM 4mg', price: 6000, image: '💊', category: 'Alergi', desc: 'Obat alergi' },
    { id: 23, name: 'Cetirizine', price: 12000, image: '💊', category: 'Alergi', desc: 'Anti alergi' },
    { id: 24, name: 'Loratadine', price: 15000, image: '💊', category: 'Alergi', desc: 'Obat gatal alergi' },
    { id: 25, name: 'Incidal OD', price: 18000, image: '💊', category: 'Alergi', desc: 'Anti histamin' },
    
    // Vitamin
    { id: 26, name: 'Vitamin C 1000mg', price: 45000, image: '💊', category: 'Vitamin', desc: 'Suplemen vitamin C' },
    { id: 27, name: 'Imboost Force', price: 65000, image: '💊', category: 'Vitamin', desc: 'Penambah imun' },
    { id: 28, name: 'Enervon-C', price: 35000, image: '💊', category: 'Vitamin', desc: 'Multivitamin' },
    { id: 29, name: 'Blackmores Vit C', price: 85000, image: '💊', category: 'Vitamin', desc: 'Vitamin C premium' },
    { id: 30, name: 'Sangobion', price: 42000, image: '💊', category: 'Vitamin', desc: 'Penambah darah' },
    { id: 31, name: 'Zinc 50mg', price: 38000, image: '💊', category: 'Vitamin', desc: 'Suplemen zinc' },
    { id: 32, name: 'Vitamin D3', price: 55000, image: '💊', category: 'Vitamin', desc: 'Suplemen vitamin D' },
    { id: 33, name: 'Omega 3', price: 95000, image: '💊', category: 'Vitamin', desc: 'Minyak ikan' },
    
    // Kulit
    { id: 34, name: 'Betadine Salep', price: 28000, image: '🧴', category: 'Kulit', desc: 'Obat luka' },
    { id: 35, name: 'Bioplacenton', price: 22000, image: '🧴', category: 'Kulit', desc: 'Salep luka bakar' },
    { id: 36, name: 'Kalpanax', price: 18000, image: '🧴', category: 'Kulit', desc: 'Obat gatal kulit' },
    { id: 37, name: 'Scabimite', price: 35000, image: '🧴', category: 'Kulit', desc: 'Obat kudis' },
    { id: 38, name: 'Salicyl Talcum', price: 15000, image: '🧴', category: 'Kulit', desc: 'Bedak gatal' },
    { id: 39, name: 'Acne Cream', price: 42000, image: '🧴', category: 'Kulit', desc: 'Krim jerawat' },
    
    // Mata
    { id: 40, name: 'Insto Reguler', price: 18000, image: '👁️', category: 'Mata', desc: 'Obat tetes mata' },
    { id: 41, name: 'Rohto Cool', price: 22000, image: '👁️', category: 'Mata', desc: 'Tetes mata dingin' },
    { id: 42, name: 'Cendo Xitrol', price: 45000, image: '👁️', category: 'Mata', desc: 'Obat mata merah' },
    { id: 43, name: 'Visine', price: 28000, image: '👁️', category: 'Mata', desc: 'Pereda mata merah' },
    { id: 44, name: 'Cendo Lyteers', price: 35000, image: '👁️', category: 'Mata', desc: 'Air mata buatan' }
];

let cart = [];
let currentCategory = 'all';
let isFirstBuyer = true;
let myVouchers = [];
let selectedProductVoucher = null;
let selectedShippingVoucher = null;
let currentTab = 'available';

// Challenge Definitions
const challengeDefinitions = [
    {
        id: 'challenge1',
        name: 'Belanja Minimal',
        icon: '🛒',
        description: 'Belanja minimal Rp 50.000 dalam satu transaksi',
        reward: { type: 'product', value: 10, label: 'Diskon 10%', maxDiscount: 50000 },
        checkFunction: (cart) => {
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            return subtotal >= 50000;
        }
    },
    {
        id: 'challenge2',
        name: 'Beli Banyak',
        icon: '📦',
        description: 'Beli minimal 3 item berbeda',
        reward: { type: 'shipping', value: 100, label: 'Gratis Ongkir', maxDiscount: 20000 },
        checkFunction: (cart) => cart.length >= 3
    },
    {
        id: 'challenge3',
        name: 'Pembeli Pertama',
        icon: '⚡',
        description: 'Jadilah pembeli pertama hari ini (Otomatis aktif)',
        reward: { type: 'product', value: 15, label: 'Diskon 15%', maxDiscount: 75000 },
        checkFunction: () => isFirstBuyer
    },
    {
        id: 'challenge4',
        name: 'Koleksi Vitamin',
        icon: '💊',
        description: 'Beli 2 produk vitamin',
        reward: { type: 'shipping', value: 50, label: 'Diskon Ongkir 50%', maxDiscount: 10000 },
        checkFunction: (cart) => {
            const vitaminCount = cart.filter(item => item.category === 'Vitamin').length;
            return vitaminCount >= 2;
        }
    },
    {
        id: 'challenge5',
        name: 'Belanja Hemat',
        icon: '🎁',
        description: 'Belanja minimal Rp 100.000',
        reward: { type: 'shipping', value: 100, label: 'Gratis Ongkir', maxDiscount: 20000 },
        checkFunction: (cart) => {
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            return subtotal >= 100000;
        }
    },
    {
        id: 'challenge6',
        name: 'Mix & Match',
        icon: '🌟',
        description: 'Beli produk dari 2 kategori berbeda',
        reward: { type: 'product', value: 12, label: 'Diskon 12%', maxDiscount: 60000 },
        checkFunction: (cart) => {
            const categories = [...new Set(cart.map(item => item.category))];
            return categories.length >= 2;
        }
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    showSection('home');
    loadCart();
    loadVouchers();
    updateVoucherBadge();
});

// Check Authentication
function checkAuth() {
    const currentUser = JSON.parse(localStorage.getItem('apotekCurrentUser') || 'null');
    
    if (!currentUser || !currentUser.verified) {
        // Not logged in, redirect to auth page
        window.location.href = 'auth.html';
        return;
    }
    
    // Display user name
    document.getElementById('userName').textContent = currentUser.name;
}

// Handle Logout
function handleLogout() {
    if (confirm('Apakah Anda yakin ingin keluar?')) {
        localStorage.removeItem('apotekCurrentUser');
        window.location.href = 'auth.html';
    }
}

// Show Profile
function showProfile() {
    showSection('profile');
    switchProfileTab('info');
    loadProfileData();
}

// Switch Profile Tab
function switchProfileTab(tab) {
    const tabInfo = document.getElementById('tabInfo');
    const tabHistory = document.getElementById('tabHistory');
    const profileInfoTab = document.getElementById('profileInfoTab');
    const profileHistoryTab = document.getElementById('profileHistoryTab');
    
    if (tab === 'info') {
        tabInfo.classList.add('border-blue-600', 'text-blue-600');
        tabInfo.classList.remove('border-transparent', 'text-gray-500');
        tabHistory.classList.remove('border-blue-600', 'text-blue-600');
        tabHistory.classList.add('border-transparent', 'text-gray-500');
        
        profileInfoTab.classList.remove('hidden');
        profileHistoryTab.classList.add('hidden');
    } else {
        tabHistory.classList.add('border-blue-600', 'text-blue-600');
        tabHistory.classList.remove('border-transparent', 'text-gray-500');
        tabInfo.classList.remove('border-blue-600', 'text-blue-600');
        tabInfo.classList.add('border-transparent', 'text-gray-500');
        
        profileInfoTab.classList.add('hidden');
        profileHistoryTab.classList.remove('hidden');
        
        loadPurchaseHistory();
    }
}

// Load Profile Data
function loadProfileData() {
    const currentUser = JSON.parse(localStorage.getItem('apotekCurrentUser'));
    if (currentUser) {
        document.getElementById('profileName').value = currentUser.name;
        document.getElementById('profileEmail').value = currentUser.email;
    }
}

// Update Profile
function updateProfile(event) {
    event.preventDefault();
    
    const currentUser = JSON.parse(localStorage.getItem('apotekCurrentUser'));
    const users = JSON.parse(localStorage.getItem('apotekUsers') || '[]');
    
    const newName = document.getElementById('profileName').value;
    const newEmail = document.getElementById('profileEmail').value;
    const oldPassword = document.getElementById('oldPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmNewPassword = document.getElementById('confirmNewPassword').value;
    
    // Check if email changed and already exists
    if (newEmail !== currentUser.email) {
        const emailExists = users.find(u => u.email === newEmail && u.email !== currentUser.email);
        if (emailExists) {
            showNotification('Email sudah digunakan oleh akun lain!', 'error');
            return;
        }
    }
    
    // Check password change
    if (oldPassword || newPassword || confirmNewPassword) {
        if (!oldPassword) {
            showNotification('Masukkan kata sandi lama!', 'error');
            return;
        }
        
        if (oldPassword !== currentUser.password) {
            showNotification('Kata sandi lama salah!', 'error');
            return;
        }
        
        if (newPassword !== confirmNewPassword) {
            showNotification('Kata sandi baru tidak cocok!', 'error');
            return;
        }
        
        if (newPassword.length < 6) {
            showNotification('Kata sandi baru minimal 6 karakter!', 'error');
            return;
        }
        
        currentUser.password = newPassword;
    }
    
    // Update user data
    currentUser.name = newName;
    currentUser.email = newEmail;
    
    // Update in users array
    const userIndex = users.findIndex(u => u.email === currentUser.email || u.email === document.getElementById('profileEmail').defaultValue);
    if (userIndex !== -1) {
        users[userIndex] = currentUser;
        localStorage.setItem('apotekUsers', JSON.stringify(users));
    }
    
    // Update current user
    localStorage.setItem('apotekCurrentUser', JSON.stringify(currentUser));
    
    // Update display
    document.getElementById('userName').textContent = currentUser.name;
    
    // Clear password fields
    document.getElementById('oldPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmNewPassword').value = '';
    
    showNotification('✅ Profil berhasil diperbarui!', 'success');
}

// Load Purchase History
function loadPurchaseHistory() {
    const currentUser = JSON.parse(localStorage.getItem('apotekCurrentUser'));
    const allPurchases = JSON.parse(localStorage.getItem('apotekPurchases') || '[]');
    const userPurchases = allPurchases.filter(p => p.userEmail === currentUser.email);
    
    const historyContainer = document.getElementById('purchaseHistory');
    
    if (userPurchases.length === 0) {
        historyContainer.innerHTML = `
            <div class="bg-white rounded-xl shadow-md p-12 text-center">
                <i class="fas fa-shopping-bag text-6xl text-gray-300 mb-4"></i>
                <h3 class="text-xl font-bold text-gray-600 mb-2">Belum Ada Riwayat Pembelian</h3>
                <p class="text-gray-500 mb-6">Mulai belanja sekarang untuk melihat riwayat pembelian Anda</p>
                <button onclick="filterCategory('all')" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700">
                    <i class="fas fa-shopping-cart mr-2"></i>Mulai Belanja
                </button>
            </div>
        `;
        return;
    }
    
    // Sort by date (newest first)
    userPurchases.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    historyContainer.innerHTML = userPurchases.map((purchase, index) => `
        <div class="bg-white rounded-xl shadow-md p-6 mb-4">
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h3 class="font-bold text-lg">Pesanan #${purchase.id}</h3>
                    <p class="text-sm text-gray-600">${new Date(purchase.date).toLocaleString('id-ID', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}</p>
                </div>
                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                    <i class="fas fa-check-circle mr-1"></i>Selesai
                </span>
            </div>
            
            <div class="border-t border-b py-4 mb-4">
                <h4 class="font-bold mb-3">Produk yang dibeli:</h4>
                <div class="space-y-2">
                    ${purchase.items.map(item => `
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-3">
                                <span class="text-2xl">${item.image}</span>
                                <div>
                                    <p class="font-semibold">${item.name}</p>
                                    <p class="text-sm text-gray-600">x${item.quantity}</p>
                                </div>
                            </div>
                            <span class="font-bold text-blue-600">Rp ${(item.price * item.quantity).toLocaleString('id-ID')}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="space-y-2">
                <div class="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span class="font-bold">Rp ${purchase.subtotal.toLocaleString('id-ID')}</span>
                </div>
                ${purchase.productDiscount > 0 ? `
                    <div class="flex justify-between text-sm text-green-600">
                        <span>Diskon Produk:</span>
                        <span class="font-bold">- Rp ${purchase.productDiscount.toLocaleString('id-ID')}</span>
                    </div>
                ` : ''}
                <div class="flex justify-between text-sm">
                    <span>Ongkir (${purchase.deliveryMethod}):</span>
                    <span class="font-bold">Rp ${purchase.baseOngkir.toLocaleString('id-ID')}</span>
                </div>
                ${purchase.shippingDiscount > 0 ? `
                    <div class="flex justify-between text-sm text-green-600">
                        <span>Diskon Ongkir:</span>
                        <span class="font-bold">- Rp ${purchase.shippingDiscount.toLocaleString('id-ID')}</span>
                    </div>
                ` : ''}
                <div class="flex justify-between text-lg font-bold border-t pt-2 mt-2">
                    <span>Total Bayar:</span>
                    <span class="text-blue-600">Rp ${purchase.total.toLocaleString('id-ID')}</span>
                </div>
                ${purchase.totalSavings > 0 ? `
                    <div class="bg-green-50 border border-green-300 rounded-lg p-2 text-center">
                        <span class="text-green-700 font-bold">🎉 Hemat: Rp ${purchase.totalSavings.toLocaleString('id-ID')}</span>
                    </div>
                ` : ''}
            </div>
            
            ${purchase.vouchers && purchase.vouchers.length > 0 ? `
                <div class="mt-4 pt-4 border-t">
                    <p class="text-sm font-bold mb-2">Voucher yang digunakan:</p>
                    <div class="flex flex-wrap gap-2">
                        ${purchase.vouchers.map(v => `
                            <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">
                                ${v.icon} ${v.name}
                            </span>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `).join('');
}

// Show Section
function showSection(section) {
    const homeSection = document.getElementById('homeSection');
    const productsSection = document.getElementById('productsSection');
    const profileSection = document.getElementById('profileSection');
    
    homeSection.classList.add('hidden');
    productsSection.classList.add('hidden');
    profileSection.classList.add('hidden');
    
    if (section === 'home') {
        homeSection.classList.remove('hidden');
    } else if (section === 'products') {
        productsSection.classList.remove('hidden');
    } else if (section === 'profile') {
        profileSection.classList.remove('hidden');
    }
}

// Filter by Category
function filterCategory(category) {
    currentCategory = category;
    showSection('products');
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    displayProducts(filteredProducts);
    
    const titles = {
        'all': 'Semua Produk',
        'Demam': 'Obat Demam & Panas',
        'Batuk': 'Obat Batuk & Flu',
        'Pencernaan': 'Obat Pencernaan',
        'Nyeri': 'Obat Nyeri & Sakit Kepala',
        'Alergi': 'Obat Alergi',
        'Vitamin': 'Vitamin & Suplemen',
        'Kulit': 'Obat Kulit',
        'Mata': 'Obat Mata'
    };
    document.getElementById('sectionTitle').textContent = titles[category] || 'Produk';
}

// Display Products
function displayProducts(productList = products) {
    const grid = document.getElementById('productsGrid');
    
    if (productList.length === 0) {
        grid.innerHTML = '<p class="col-span-full text-center text-gray-500 py-8">Tidak ada produk ditemukan</p>';
        return;
    }
    
    grid.innerHTML = productList.map(product => `
        <div class="product-card bg-white rounded-lg shadow-md p-4 hover:shadow-xl border-2 border-gray-100">
            <div class="text-6xl text-center mb-3">${product.image}</div>
            <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-2">${product.category}</span>
            <h3 class="font-bold text-lg mb-1">${product.name}</h3>
            <p class="text-gray-600 text-sm mb-3">${product.desc}</p>
            <div class="flex justify-between items-center">
                <span class="text-blue-600 font-bold text-xl">Rp ${product.price.toLocaleString('id-ID')}</span>
                <button onclick="addToCart(${product.id})" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
    saveCart();
    showNotification('Produk ditambahkan ke keranjang!');
    checkAvailableChallenges();
}

// Check Available Challenges for Claiming
function checkAvailableChallenges() {
    challengeDefinitions.forEach(challenge => {
        const isCompleted = challenge.checkFunction(cart);
        const alreadyClaimed = myVouchers.some(v => v.challengeId === challenge.id && !v.used);
        
        if (isCompleted && !alreadyClaimed) {
            const notification = document.createElement('div');
            notification.className = 'fixed top-32 right-4 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg z-50 max-w-sm';
            notification.innerHTML = `
                <div class="flex items-start space-x-3">
                    <div class="text-3xl">${challenge.icon}</div>
                    <div class="flex-1">
                        <p class="font-bold mb-1">✅ Challenge Selesai!</p>
                        <p class="text-sm mb-2">${challenge.name}</p>
                        <button onclick="claimVoucher('${challenge.id}'); this.parentElement.parentElement.parentElement.remove();" class="bg-white text-green-600 px-3 py-1 rounded font-bold text-sm hover:bg-gray-100">
                            Klaim Voucher
                        </button>
                    </div>
                    <button onclick="this.parentElement.parentElement.remove()" class="text-white hover:text-gray-200">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 10000);
        }
    });
}

// Update Cart Display
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-gray-500 text-center py-8">Keranjang masih kosong</p>';
        cartCount.textContent = '0';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg border-2 border-gray-200">
                <div class="text-3xl">${item.image}</div>
                <div class="flex-1">
                    <h4 class="font-semibold text-sm">${item.name}</h4>
                    <p class="text-blue-600 font-bold">Rp ${item.price.toLocaleString('id-ID')}</p>
                </div>
                <div class="flex items-center space-x-2">
                    <button onclick="decreaseQuantity(${item.id})" class="bg-gray-300 w-8 h-8 rounded hover:bg-gray-400">-</button>
                    <span class="font-bold w-8 text-center">${item.quantity}</span>
                    <button onclick="increaseQuantity(${item.id})" class="bg-blue-600 text-white w-8 h-8 rounded hover:bg-blue-700">+</button>
                </div>
                <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
        
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.classList.add('cart-badge');
        setTimeout(() => cartCount.classList.remove('cart-badge'), 500);
    }
    
    calculateTotal();
    displayVoucherSelection();
}

// Display Voucher Selection in Cart
function displayVoucherSelection() {
    const productVouchers = myVouchers.filter(v => !v.used && v.reward.type === 'product');
    const shippingVouchers = myVouchers.filter(v => !v.used && v.reward.type === 'shipping');
    
    const voucherSection = document.getElementById('voucherSection');
    if (productVouchers.length > 0 && cart.length > 0) {
        voucherSection.innerHTML = `
            <div class="bg-blue-50 border-2 border-blue-300 rounded-lg p-3">
                <div class="flex justify-between items-center mb-2">
                    <span class="font-bold text-sm">🎟️ Voucher Diskon Produk</span>
                    <button onclick="showVoucherModal('product')" class="text-blue-600 text-sm font-bold hover:underline">
                        ${selectedProductVoucher ? 'Ganti' : 'Pilih'} (${productVouchers.length})
                    </button>
                </div>
                <div id="selectedProductVoucher" class="text-sm">
                    ${selectedProductVoucher ? 
                        `<div class="bg-white p-2 rounded flex justify-between items-center">
                            <span class="text-green-600 font-bold">${selectedProductVoucher.icon} ${selectedProductVoucher.reward.label}</span>
                            <button onclick="removeProductVoucher()" class="text-red-500 hover:text-red-700"><i class="fas fa-times"></i></button>
                        </div>` 
                        : '<span class="text-gray-600">Belum ada voucher dipilih</span>'}
                </div>
            </div>
        `;
    } else {
        voucherSection.innerHTML = '';
    }
    
    const shippingVoucherSection = document.getElementById('shippingVoucherSection');
    if (shippingVouchers.length > 0 && cart.length > 0) {
        shippingVoucherSection.innerHTML = `
            <div class="bg-green-50 border-2 border-green-300 rounded-lg p-3">
                <div class="flex justify-between items-center mb-2">
                    <span class="font-bold text-sm">🚚 Voucher Ongkir</span>
                    <button onclick="showVoucherModal('shipping')" class="text-green-600 text-sm font-bold hover:underline">
                        ${selectedShippingVoucher ? 'Ganti' : 'Pilih'} (${shippingVouchers.length})
                    </button>
                </div>
                <div id="selectedShippingVoucher" class="text-sm">
                    ${selectedShippingVoucher ? 
                        `<div class="bg-white p-2 rounded flex justify-between items-center">
                            <span class="text-green-600 font-bold">${selectedShippingVoucher.icon} ${selectedShippingVoucher.reward.label}</span>
                            <button onclick="removeShippingVoucher()" class="text-red-500 hover:text-red-700"><i class="fas fa-times"></i></button>
                        </div>` 
                        : '<span class="text-gray-600">Belum ada voucher dipilih</span>'}
                </div>
            </div>
        `;
    } else {
        shippingVoucherSection.innerHTML = '';
    }
}

// Increase/Decrease Quantity
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity++;
        updateCart();
        saveCart();
        checkAvailableChallenges();
    }
}

function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item && item.quantity > 1) {
        item.quantity--;
        updateCart();
        saveCart();
        checkAvailableChallenges();
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    saveCart();
    checkAvailableChallenges();
}

// Claim Voucher
function claimVoucher(challengeId) {
    const challenge = challengeDefinitions.find(c => c.id === challengeId);
    if (!challenge) return;
    
    const isCompleted = challenge.checkFunction(cart);
    if (!isCompleted) {
        alert('Challenge belum selesai!');
        return;
    }
    
    const alreadyClaimed = myVouchers.some(v => v.challengeId === challengeId && !v.used);
    if (alreadyClaimed) {
        alert('Voucher sudah diklaim!');
        return;
    }
    
    const voucher = {
        id: 'voucher_' + Date.now(),
        challengeId: challenge.id,
        name: challenge.name,
        icon: challenge.icon,
        reward: challenge.reward,
        claimedAt: new Date().toISOString(),
        used: false
    };
    
    myVouchers.push(voucher);
    saveVouchers();
    updateVoucherBadge();
    displayVoucherSelection();
    
    showNotification(`🎉 Voucher ${challenge.name} berhasil diklaim!`);
    updateChallengeDisplay();
}

// Show Voucher Modal
function showVoucherModal(type) {
    const vouchers = myVouchers.filter(v => !v.used && v.reward.type === type);
    if (vouchers.length === 0) return;
    
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-xl max-w-md w-full p-6">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-bold">${type === 'product' ? '🎟️ Pilih Voucher Diskon' : '🚚 Pilih Voucher Ongkir'}</h3>
                <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            <div class="space-y-3">
                ${vouchers.map(v => `
                    <div onclick="selectVoucher('${v.id}', '${type}'); this.closest('.fixed').remove();" 
                         class="voucher-card border-2 border-blue-300 rounded-lg p-4 cursor-pointer hover:border-blue-600 hover:shadow-md">
                        <div class="flex items-center space-x-3">
                            <div class="text-3xl">${v.icon}</div>
                            <div class="flex-1">
                                <h4 class="font-bold">${v.name}</h4>
                                <p class="text-sm text-gray-600">${v.reward.label}</p>
                                ${v.reward.maxDiscount ? `<p class="text-xs text-gray-500">Max. Rp ${v.reward.maxDiscount.toLocaleString('id-ID')}</p>` : ''}
                            </div>
                            <i class="fas fa-chevron-right text-blue-600"></i>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// Select Voucher
function selectVoucher(voucherId, type) {
    const voucher = myVouchers.find(v => v.id === voucherId);
    if (!voucher) return;
    
    if (type === 'product') {
        selectedProductVoucher = voucher;
    } else {
        selectedShippingVoucher = voucher;
    }
    
    displayVoucherSelection();
    calculateTotal();
    showNotification(`Voucher ${voucher.name} dipilih!`);
}

// Remove Voucher Selection
function removeProductVoucher() {
    selectedProductVoucher = null;
    displayVoucherSelection();
    calculateTotal();
}

function removeShippingVoucher() {
    selectedShippingVoucher = null;
    displayVoucherSelection();
    calculateTotal();
}

// Calculate Total with Vouchers
function calculateTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliverySelect = document.getElementById('deliverySelect');
    const baseOngkir = parseInt(deliverySelect.value) || 0;
    
    let productDiscount = 0;
    let shippingDiscount = 0;
    
    // Apply Product Voucher
    if (selectedProductVoucher) {
        const discountAmount = Math.floor(subtotal * (selectedProductVoucher.reward.value / 100));
        productDiscount = Math.min(discountAmount, selectedProductVoucher.reward.maxDiscount || discountAmount);
    }
    
    const subtotalAfterDiscount = subtotal - productDiscount;
    
    // Apply Shipping Voucher
    if (selectedShippingVoucher && baseOngkir > 0) {
        if (selectedShippingVoucher.reward.value === 100) {
            shippingDiscount = Math.min(baseOngkir, selectedShippingVoucher.reward.maxDiscount || baseOngkir);
        } else {
            const discountAmount = Math.floor(baseOngkir * (selectedShippingVoucher.reward.value / 100));
            shippingDiscount = Math.min(discountAmount, selectedShippingVoucher.reward.maxDiscount || discountAmount);
        }
    }
    
    const finalOngkir = baseOngkir - shippingDiscount;
    const total = subtotalAfterDiscount + finalOngkir;
    const totalSavings = productDiscount + shippingDiscount;
    
    // Update Display
    document.getElementById('subtotal').textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
    document.getElementById('ongkir').textContent = `Rp ${baseOngkir.toLocaleString('id-ID')}`;
    document.getElementById('total').textContent = `Rp ${total.toLocaleString('id-ID')}`;
    
    // Show/Hide Discount Sections
    const discountSection = document.getElementById('discountSection');
    const shippingDiscountSection = document.getElementById('shippingDiscountSection');
    const savingsInfo = document.getElementById('savingsInfo');
    
    if (productDiscount > 0) {
        discountSection.classList.remove('hidden');
        document.getElementById('productDiscount').textContent = `- Rp ${productDiscount.toLocaleString('id-ID')}`;
    } else {
        discountSection.classList.add('hidden');
    }
    
    if (shippingDiscount > 0) {
        shippingDiscountSection.classList.remove('hidden');
        document.getElementById('shippingDiscount').textContent = `- Rp ${shippingDiscount.toLocaleString('id-ID')}`;
    } else {
        shippingDiscountSection.classList.add('hidden');
    }
    
    if (totalSavings > 0) {
        savingsInfo.classList.remove('hidden');
        document.getElementById('totalSavings').textContent = `Rp ${totalSavings.toLocaleString('id-ID')}`;
    } else {
        savingsInfo.classList.add('hidden');
    }
}

// Toggle Cart
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.classList.toggle('translate-x-full');
    overlay.classList.toggle('hidden');
}

// Show Challenges Modal
function showChallenges() {
    const modal = document.getElementById('challengeModal');
    modal.classList.remove('hidden');
    updateChallengeDisplay();
}

function closeChallenges() {
    const modal = document.getElementById('challengeModal');
    modal.classList.add('hidden');
}

// Switch Tab
function switchTab(tab) {
    currentTab = tab;
    const availableTab = document.getElementById('availableTab');
    const vouchersTab = document.getElementById('vouchersTab');
    const tabAvailable = document.getElementById('tabAvailable');
    const tabVouchers = document.getElementById('tabVouchers');
    
    if (tab === 'available') {
        availableTab.classList.remove('hidden');
        vouchersTab.classList.add('hidden');
        tabAvailable.classList.add('border-blue-600', 'text-blue-600');
        tabAvailable.classList.remove('border-transparent', 'text-gray-500');
        tabVouchers.classList.remove('border-blue-600', 'text-blue-600');
        tabVouchers.classList.add('border-transparent', 'text-gray-500');
    } else {
        availableTab.classList.add('hidden');
        vouchersTab.classList.remove('hidden');
        tabVouchers.classList.add('border-blue-600', 'text-blue-600');
        tabVouchers.classList.remove('border-transparent', 'text-gray-500');
        tabAvailable.classList.remove('border-blue-600', 'text-blue-600');
        tabAvailable.classList.add('border-transparent', 'text-gray-500');
        displayMyVouchers();
    }
}

// Update Challenge Display
function updateChallengeDisplay() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const uniqueItems = cart.length;
    const categories = [...new Set(cart.map(item => item.category))];
    const vitaminCount = cart.filter(item => item.category === 'Vitamin').length;
    
    // Progress Display
    const progressHTML = `
        <div class="bg-blue-50 border-2 border-blue-300 rounded-xl p-4">
            <h4 class="font-bold text-lg mb-3 text-blue-800">📊 Progress Challenge Anda</h4>
            <div class="space-y-3">
                <div>
                    <div class="flex justify-between text-sm mb-1">
                        <span>Belanja Minimal (Rp 50.000)</span>
                        <span class="font-bold ${subtotal >= 50000 ? 'text-green-600' : ''}">Rp ${subtotal.toLocaleString('id-ID')}</span>
                    </div>
                    <div class="bg-gray-200 rounded-full h-2">
                        <div class="bg-blue-600 h-2 rounded-full transition-all" style="width: ${Math.min(100, (subtotal/50000)*100)}%"></div>
                    </div>
                </div>
                <div>
                    <div class="flex justify-between text-sm mb-1">
                        <span>Beli Banyak (3 item berbeda)</span>
                        <span class="font-bold ${uniqueItems >= 3 ? 'text-green-600' : ''}">${uniqueItems}/3</span>
                    </div>
                    <div class="bg-gray-200 rounded-full h-2">
                        <div class="bg-blue-600 h-2 rounded-full transition-all" style="width: ${Math.min(100, (uniqueItems/3)*100)}%"></div>
                    </div>
                </div>
                <div>
                    <div class="flex justify-between text-sm mb-1">
                        <span>Mix & Match (2 kategori)</span>
                        <span class="font-bold ${categories.length >= 2 ? 'text-green-600' : ''}">${categories.length}/2</span>
                    </div>
                    <div class="bg-gray-200 rounded-full h-2">
                        <div class="bg-blue-600 h-2 rounded-full transition-all" style="width: ${Math.min(100, (categories.length/2)*100)}%"></div>
                    </div>
                </div>
                <div>
                    <div class="flex justify-between text-sm mb-1">
                        <span>Koleksi Vitamin (2 produk)</span>
                        <span class="font-bold ${vitaminCount >= 2 ? 'text-green-600' : ''}">${vitaminCount}/2</span>
                    </div>
                    <div class="bg-gray-200 rounded-full h-2">
                        <div class="bg-blue-600 h-2 rounded-full transition-all" style="width: ${Math.min(100, (vitaminCount/2)*100)}%"></div>
                    </div>
                </div>
                <div>
                    <div class="flex justify-between text-sm mb-1">
                        <span>Belanja Hemat (Rp 100.000)</span>
                        <span class="font-bold ${subtotal >= 100000 ? 'text-green-600' : ''}">Rp ${subtotal.toLocaleString('id-ID')}</span>
                    </div>
                    <div class="bg-gray-200 rounded-full h-2">
                        <div class="bg-blue-600 h-2 rounded-full transition-all" style="width: ${Math.min(100, (subtotal/100000)*100)}%"></div>
                    </div>
                </div>
                <div>
                    <div class="flex justify-between text-sm mb-1">
                        <span>Pembeli Pertama</span>
                        <span class="font-bold ${isFirstBuyer ? 'text-green-600' : 'text-gray-500'}">${isFirstBuyer ? '✓ Aktif' : 'Sudah Digunakan'}</span>
                    </div>
                    <div class="bg-gray-200 rounded-full h-2">
                        <div class="bg-blue-600 h-2 rounded-full transition-all" style="width: ${isFirstBuyer ? '100' : '0'}%"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.getElementById('challengeProgress').innerHTML = progressHTML;
    
    // Challenges List
    const challengesHTML = challengeDefinitions.map(challenge => {
        const isCompleted = challenge.checkFunction(cart);
        const alreadyClaimed = myVouchers.some(v => v.challengeId === challenge.id && !v.used);
        
        return `
            <div class="challenge-card text-white p-6 rounded-xl relative ${alreadyClaimed ? 'opacity-60' : ''}">
                ${alreadyClaimed ? '<div class="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">✓ Diklaim</div>' : ''}
                <div class="text-4xl mb-3">${challenge.icon}</div>
                <h5 class="font-bold text-xl mb-2">${challenge.name}</h5>
                <p class="mb-4">${challenge.description}</p>
                <div class="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg text-center mb-3">
                    ${challenge.reward.label}
                </div>
                ${isCompleted && !alreadyClaimed ? 
                    `<button onclick="claimVoucher('${challenge.id}')" class="w-full bg-yellow-400 text-gray-800 py-2 rounded-lg font-bold hover:bg-yellow-500">
                        🎁 Klaim Voucher
                    </button>` :
                    !isCompleted ?
                    `<div class="text-center text-sm opacity-75">Selesaikan challenge untuk klaim voucher</div>` :
                    ''
                }
            </div>
        `;
    }).join('');
    
    document.getElementById('challengesList').innerHTML = challengesHTML;
}

// Display My Vouchers
function displayMyVouchers() {
    const unusedVouchers = myVouchers.filter(v => !v.used);
    const usedVouchers = myVouchers.filter(v => v.used);
    
    let html = '';
    
    if (unusedVouchers.length > 0) {
        html += '<h4 class="text-lg font-bold mb-3">🎟️ Voucher Aktif</h4>';
        html += '<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">';
        html += unusedVouchers.map(v => `
            <div class="voucher-card border-2 border-green-400 bg-green-50 rounded-lg p-4">
                <div class="flex items-start space-x-3">
                    <div class="text-4xl">${v.icon}</div>
                    <div class="flex-1">
                        <h5 class="font-bold text-lg">${v.name}</h5>
                        <p class="text-sm text-gray-600 mb-2">${v.reward.label}</p>
                        ${v.reward.maxDiscount ? `<p class="text-xs text-gray-500">Max. Rp ${v.reward.maxDiscount.toLocaleString('id-ID')}</p>` : ''}
                        <p class="text-xs text-gray-500 mt-2">Diklaim: ${new Date(v.claimedAt).toLocaleDateString('id-ID')}</p>
                    </div>
                </div>
            </div>
        `).join('');
        html += '</div>';
    }
    
    if (usedVouchers.length > 0) {
        html += '<h4 class="text-lg font-bold mb-3">📋 Voucher Terpakai</h4>';
        html += '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">';
        html += usedVouchers.map(v => `
            <div class="voucher-card border-2 border-gray-300 bg-gray-100 rounded-lg p-4 opacity-60">
                <div class="flex items-start space-x-3">
                    <div class="text-4xl">${v.icon}</div>
                    <div class="flex-1">
                        <h5 class="font-bold text-lg">${v.name}</h5>
                        <p class="text-sm text-gray-600">${v.reward.label}</p>
                        <p class="text-xs text-gray-500 mt-2">Terpakai</p>
                    </div>
                </div>
            </div>
        `).join('');
        html += '</div>';
    }
    
    if (unusedVouchers.length === 0 && usedVouchers.length === 0) {
        html = '<div class="text-center py-12"><p class="text-gray-500 text-lg">Belum ada voucher. Selesaikan challenge untuk mendapatkan voucher!</p></div>';
    }
    
    document.getElementById('myVouchersList').innerHTML = html;
}

// Update Voucher Badge
function updateVoucherBadge() {
    const unusedCount = myVouchers.filter(v => !v.used).length;
    document.getElementById('voucherBadge').textContent = unusedCount;
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Keranjang belanja masih kosong!');
        return;
    }
    
    const deliverySelect = document.getElementById('deliverySelect');
    if (deliverySelect.value === '0') {
        alert('Silakan pilih metode pengiriman!');
        return;
    }
    
    const currentUser = JSON.parse(localStorage.getItem('apotekCurrentUser'));
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const baseOngkir = parseInt(deliverySelect.value);
    const total = parseInt(document.getElementById('total').textContent.replace(/[^0-9]/g, ''));
    const savings = parseInt(document.getElementById('totalSavings')?.textContent.replace(/[^0-9]/g, '') || '0');
    
    // Calculate discounts
    let productDiscount = 0;
    let shippingDiscount = 0;
    
    if (selectedProductVoucher) {
        const discountAmount = Math.floor(subtotal * (selectedProductVoucher.reward.value / 100));
        productDiscount = Math.min(discountAmount, selectedProductVoucher.reward.maxDiscount || discountAmount);
    }
    
    if (selectedShippingVoucher && baseOngkir > 0) {
        if (selectedShippingVoucher.reward.value === 100) {
            shippingDiscount = Math.min(baseOngkir, selectedShippingVoucher.reward.maxDiscount || baseOngkir);
        } else {
            const discountAmount = Math.floor(baseOngkir * (selectedShippingVoucher.reward.value / 100));
            shippingDiscount = Math.min(discountAmount, selectedShippingVoucher.reward.maxDiscount || discountAmount);
        }
    }
    
    // Create purchase record
    const purchase = {
        id: 'APT' + Date.now(),
        userEmail: currentUser.email,
        date: new Date().toISOString(),
        items: cart.map(item => ({...item})),
        subtotal: subtotal,
        productDiscount: productDiscount,
        baseOngkir: baseOngkir,
        shippingDiscount: shippingDiscount,
        total: total,
        totalSavings: savings,
        deliveryMethod: deliverySelect.options[deliverySelect.selectedIndex].text,
        vouchers: []
    };
    
    if (selectedProductVoucher) {
        purchase.vouchers.push({
            icon: selectedProductVoucher.icon,
            name: selectedProductVoucher.name,
            type: 'product'
        });
    }
    
    if (selectedShippingVoucher) {
        purchase.vouchers.push({
            icon: selectedShippingVoucher.icon,
            name: selectedShippingVoucher.name,
            type: 'shipping'
        });
    }
    
    // Save purchase to history
    const allPurchases = JSON.parse(localStorage.getItem('apotekPurchases') || '[]');
    allPurchases.push(purchase);
    localStorage.setItem('apotekPurchases', JSON.stringify(allPurchases));
    
    let message = '🏥 APOTEK BERKAH 51\\n';
    message += '━━━━━━━━━━━━━━━━━━━━\\n\\n';
    message += '✅ PESANAN BERHASIL!\\n\\n';
    message += `ID Pesanan: ${purchase.id}\\n\\n`;
    message += '📦 DETAIL PESANAN:\\n';
    cart.forEach(item => {
        message += `• ${item.name} x${item.quantity}\\n  Rp ${(item.price * item.quantity).toLocaleString('id-ID')}\\n`;
    });
    message += `\\n💰 Subtotal: Rp ${subtotal.toLocaleString('id-ID')}`;
    
    if (selectedProductVoucher || selectedShippingVoucher) {
        message += '\\n\\n🎟️ VOUCHER DIGUNAKAN:\\n';
        if (selectedProductVoucher) {
            message += `${selectedProductVoucher.icon} ${selectedProductVoucher.name}\\n`;
        }
        if (selectedShippingVoucher) {
            message += `${selectedShippingVoucher.icon} ${selectedShippingVoucher.name}\\n`;
        }
        message += `\\n💚 Total Hemat: Rp ${savings.toLocaleString('id-ID')}`;
    }
    
    const deliveryName = deliverySelect.options[deliverySelect.selectedIndex].text;
    message += `\\n\\n🚚 Pengiriman: ${deliveryName}`;
    message += `\\n\\n💵 TOTAL BAYAR: Rp ${total.toLocaleString('id-ID')}`;
    message += '\\n\\n✅ Pesanan sedang diproses!';
    message += '\\nCek riwayat di menu Profil.';
    
    alert(message);
    
    // Mark vouchers as used
    if (selectedProductVoucher) {
        const voucher = myVouchers.find(v => v.id === selectedProductVoucher.id);
        if (voucher) voucher.used = true;
    }
    if (selectedShippingVoucher) {
        const voucher = myVouchers.find(v => v.id === selectedShippingVoucher.id);
        if (voucher) voucher.used = true;
    }
    
    // Reset
    isFirstBuyer = false;
    cart = [];
    selectedProductVoucher = null;
    selectedShippingVoucher = null;
    updateCart();
    saveCart();
    saveVouchers();
    updateVoucherBadge();
    toggleCart();
    
    showNotification('✅ Pesanan berhasil! Cek riwayat di Profil.', 'success');
}

// Save/Load Functions
function saveCart() {
    localStorage.setItem('apotekCart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('apotekCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

function saveVouchers() {
    localStorage.setItem('apotekVouchers', JSON.stringify(myVouchers));
}

function loadVouchers() {
    const savedVouchers = localStorage.getItem('apotekVouchers');
    if (savedVouchers) {
        myVouchers = JSON.parse(savedVouchers);
    }
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-32 right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    notification.innerHTML = `<i class="fas fa-check-circle mr-2"></i>${message}`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Open WhatsApp Consultation
function openWhatsAppConsultation() {
    const modal = document.getElementById('whatsappModal');
    modal.classList.remove('hidden');
}

function closeWhatsAppModal() {
    const modal = document.getElementById('whatsappModal');
    modal.classList.add('hidden');
}

function confirmWhatsAppConsultation() {
    const currentUser = JSON.parse(localStorage.getItem('apotekCurrentUser'));
    const userName = currentUser ? currentUser.name : 'Customer';
    
    // Format nomor WhatsApp (hapus karakter non-digit)
    const phoneNumber = '6285706600737';
    
    // Pesan default dengan informasi user
    const message = `Halo Apotek Berkah 51 👋

Saya *${userName}* ingin berkonsultasi tentang obat.

Mohon bantuannya. Terima kasih! 🙏`;
    
    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(message);
    
    // Buka WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // Close modal
    closeWhatsAppModal();
    
    showNotification('✅ Membuka WhatsApp untuk konsultasi...');
}
