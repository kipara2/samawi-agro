// Data ya mfano (Hapa ndipo tuta-connect na Firebase baadaye)
let products = [
    { id: 1, name: "Mahindi Safi", price: 85000, img: "https://via.placeholder.com/150", desc: "Gunia la kilo 100" },
    { id: 2, name: "Mbuzi wa Nyama", price: 120000, img: "https://via.placeholder.com/150", desc: "Mbuzi bora kutoka Dodoma" }
];

// 1. Kazi ya kubadilisha kurasa (Home, Wallet, Admin)
function switchSection(sectionId) {
    document.querySelectorAll('main section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
    
    // Update active nav icon
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

// 2. Kazi ya kuonesha bidhaa kwenye Soko (Home)
function renderProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = ""; // Safisha kwanza
    
    products.forEach(p => {
        grid.innerHTML += `
            <div class="product-card">
                <img src="${p.img}" alt="${p.name}">
                <div class="p-info">
                    <p class="p-name">${p.name}</p>
                    <p class="p-price">Tsh ${p.price.toLocaleString()}</p>
                    <button class="btn-buy" onclick="addToCart(${p.id})">Nunua</button>
                </div>
            </div>
        `;
    });
}

// 3. Kazi ya kupakia picha na bidhaa mpya (Real Upload Logic)
function uploadProduct() {
    const name = document.getElementById('p-name').value;
    const price = document.getElementById('p-price').value;
    const desc = document.getElementById('p-desc').value;
    const file = document.getElementById('file-input').files[0];

    if(!name || !price || !file) {
        alert("Tafadhali jaza picha, jina na bei!");
        return;
    }

    // KWA SASA (Maelekezo): Hapa tutaweka code za Firebase ku-upload.
    // Kwa sasa tunaongeza kwenye list ya hapa hapa kuona inavyofanya kazi.
    
    const newProduct = {
        id: products.length + 1,
        name: name,
        price: parseInt(price),
        img: URL.createObjectURL(file), // Hii inasoma picha uliyopiga sasa hivi
        desc: desc
    };

    products.unshift(newProduct); // Inaweka juu kabisa ya list
    renderProducts(); // Inatokea kwenye soko sekunde hiyo hiyo
    
    alert("Hongera! Bidhaa imewekwa sokoni.");
    switchSection('home-section'); // Kurudi sokoni
}

// Anzisha app
renderProducts();
