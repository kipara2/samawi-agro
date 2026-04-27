// NAVIGATION
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// DATA YAKO
const data = {
  kilimo_data: {
    mazao_ya_chakula: [
      {id: 1, jina: "Mchele Supa", bei_kilo: 2800, kipimo: "Kg", hali: "Inapanda"},
      {id: 2, jina: "Mahindi", bei_kilo: 850, kipimo: "Kg", hali: "Inatulia"}
    ],
    mazao_ya_biashara: [
      {id: 5, jina: "Alizeti", bei_kilo: 1350, kipimo: "Kg", hali: "Inapanda"}
    ],
    mifugo: [
      {id: 8, jina: "Ng'ombe", bei_wastani: 950000, kipimo: "Kichwa", hali: "Inapanda"}
    ]
  }
};

// LOAD PRODUCTS
function loadProducts() {
  const home = document.getElementById("homeProducts");
  const market = document.getElementById("marketProducts");

  home.innerHTML = "";
  market.innerHTML = "";

  const all = [
    ...data.kilimo_data.mazao_ya_chakula,
    ...data.kilimo_data.mazao_ya_biashara,
    ...data.kilimo_data.mifugo
  ];

  all.forEach(item => {
    let price = item.bei_kilo || item.bei_wastani;

    const card = `
      <div class="card">
        <h3>${item.jina}</h3>
        <p>Tsh ${price}</p>
        <button onclick="addToCart('${item.jina}', ${price})">Add</button>
      </div>
    `;

    home.innerHTML += card;
    market.innerHTML += card;
  });
}

// CART
let cart = [];

function addToCart(name, price) {
  cart.push({name, price});
  renderCart();
}

function renderCart() {
  const box = document.getElementById("cartItems");
  let total = 0;

  box.innerHTML = "";

  cart.forEach(i => {
    total += i.price;
    box.innerHTML += `<p>${i.name} - Tsh ${i.price}</p>`;
  });

  box.innerHTML += `<h3>Total: Tsh ${total}</h3>`;
}

// START
loadProducts();
