// NAVIGATION
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  document.getElementById(screenId).classList.add('active');
}

// SAMPLE DATA (REAL STRUCTURE)
const products = [
  { name: "Mahindi", price: 80000, location: "Morogoro" },
  { name: "Mpunga", price: 120000, location: "Mbeya" },
  { name: "Maharage", price: 100000, location: "Iringa" },
  { name: "Vitunguu", price: 90000, location: "Arusha" }
];

// LOAD PRODUCTS
function loadProducts() {
  const home = document.getElementById("homeProducts");
  const market = document.getElementById("marketProducts");

  home.innerHTML = "";
  market.innerHTML = "";

  products.forEach((p, index) => {
    const card = `
      <div class="card">
        <h4>${p.name}</h4>
        <p>Tsh ${p.price}</p>
        <small>📍 ${p.location}</small>
        <br><br>
        <button onclick="addToCart(${index})">Add</button>
      </div>
    `;

    home.innerHTML += card;
    market.innerHTML += card;
  });
}

// CART SYSTEM
let cart = [];

function addToCart(index) {
  cart.push(products[index]);
  renderCart();
}

function renderCart() {
  const cartBox = document.getElementById("cartItems");

  cartBox.innerHTML = "";

  cart.forEach(item => {
    cartBox.innerHTML += `
      <div class="card">
        <h4>${item.name}</h4>
        <p>Tsh ${item.price}</p>
      </div>
    `;
  });
}

// INITIAL LOAD
loadProducts();
