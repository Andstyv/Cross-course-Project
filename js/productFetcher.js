const productURL = "https://cms-ca.styve.digital/wp-json/wc/store/products";
const productsContainer = document.querySelector(".products-grid");
const cartItems = JSON.parse(localStorage.getItem("cartList"));
const numberOfItems = document.querySelector(".numberOfItems");

const catMenBtn = document.getElementById("cat-men-btn");
const catWomenBtn = document.getElementById("cat-women-btn");
const catKidsBtn = document.getElementById("cat-kids-btn");

const catMenURL = "https://cms-ca.styve.digital/wp-json/wc/store/products?category=16";
const catWomenURL = "https://cms-ca.styve.digital/wp-json/wc/store/products?category=17";
const catKidsURL = "https://cms-ca.styve.digital/wp-json/wc/store/products?category=18";

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();

  console.log(cartItems.length);
  productsContainer.innerHTML = "";
  products.forEach(function (product) {
    productsContainer.innerHTML += `<div class="product-card"> 
    <a href="product_specific.html?id=${product.id}">
    <img src="${product.images[0].src}" alt="${product.images.alt}" class="jacketimg">
    </a>
    <div class="prod-text"> 
    <h2 class="product-title">${product.name}</h2>
    <div class="product-info-text">
    ${product.description}</div>
    <a href="product_specific.html?id=${product.id}" class="prod-explore">EXPLORE</a>
    </div></div>`;
  });
}
getProducts(productURL);

function productsInCart() {
  if (cartItems.length) {
    numberOfItems.style.display = "inline";
    numberOfItems.innerHTML = `${cartItems.length}`;
  }
}
productsInCart();

catMenBtn.addEventListener("click", function () {
  getProducts(catMenURL);
  catMenBtn.style.color = "#000";
  catMenBtn.style.background = "#fff";
  catWomenBtn.style.color = "#fff";
  catWomenBtn.style.background = "none";
  catKidsBtn.style.color = "#fff";
  catKidsBtn.style.background = "none";
});

catWomenBtn.addEventListener("click", function () {
  getProducts(catWomenURL);
  catWomenBtn.style.color = "#000";
  catWomenBtn.style.background = "#fff";
  catKidsBtn.style.color = "#fff";
  catKidsBtn.style.background = "none";
  catMenBtn.style.color = "#fff";
  catMenBtn.style.background = "none";
});

catKidsBtn.addEventListener("click", function () {
  getProducts(catKidsURL);
  catKidsBtn.style.color = "#000";
  catKidsBtn.style.background = "#fff";
  catMenBtn.style.color = "#fff";
  catMenBtn.style.background = "none";
  catWomenBtn.style.color = "#fff";
  catWomenBtn.style.background = "none";
});
