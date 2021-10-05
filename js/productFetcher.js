const productURL = "https://cms-ca.styve.digital/wp-json/wc/store/products";
const productsContainer = document.querySelector(".products-grid");
const cartItems = JSON.parse(localStorage.getItem("cartList"));
let cartArray = cartItems || [];
const numberOfItems = document.querySelector(".numberOfItems");

const catMenBtn = document.getElementById("cat-men-btn");
const catWomenBtn = document.getElementById("cat-women-btn");
const catKidsBtn = document.getElementById("cat-kids-btn");
const catResetBtn = document.getElementById("cat-reset-btn");

const clearSearchBtn = document.querySelector(".search-clear");
const searchBtn = document.querySelector(".searchButton");

const catMenURL = "https://cms-ca.styve.digital/wp-json/wc/store/products?category=16";
const catWomenURL = "https://cms-ca.styve.digital/wp-json/wc/store/products?category=17";
const catKidsURL = "https://cms-ca.styve.digital/wp-json/wc/store/products?category=18";

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();

  if (products.length) {
    productsContainer.innerHTML = "";
    products.forEach(function (product) {
      productsContainer.innerHTML += `<div class="product-card"> 
    <a href="product_specific.html?id=${product.id}">
    <img src="${product.images[0].src}" alt="${product.name}" class="jacketimg">
    </a>
    <div class="prod-text"> 
    <h2 class="product-title">${product.name}</h2>
    <div class="product-info-text">
    ${product.description}</div>
    <a href="product_specific.html?id=${product.id}" class="prod-explore">EXPLORE</a>
    </div></div>`;
    });
  } else {
    productsContainer.innerHTML = `<div class="no-products">The search returned no results.</div>`;
  }
}
getProducts(productURL);

function productsInCart() {
  if (cartArray.length) {
    numberOfItems.style.display = "inline";
    numberOfItems.innerHTML = `${cartArray.length}`;
  } else {
    numberOfItems.style.display = "none";
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
  document.querySelector(".searchWord").value = "";
});

catWomenBtn.addEventListener("click", function () {
  getProducts(catWomenURL);
  catWomenBtn.style.color = "#000";
  catWomenBtn.style.background = "#fff";
  catKidsBtn.style.color = "#fff";
  catKidsBtn.style.background = "none";
  catMenBtn.style.color = "#fff";
  catMenBtn.style.background = "none";
  document.querySelector(".searchWord").value = "";
});

catKidsBtn.addEventListener("click", function () {
  getProducts(catKidsURL);
  catKidsBtn.style.color = "#000";
  catKidsBtn.style.background = "#fff";
  catMenBtn.style.color = "#fff";
  catMenBtn.style.background = "none";
  catWomenBtn.style.color = "#fff";
  catWomenBtn.style.background = "none";
  document.querySelector(".searchWord").value = "";
});

catResetBtn.addEventListener("click", function () {
  getProducts(productURL);
  catKidsBtn.style.color = "#fff";
  catKidsBtn.style.background = "none";
  catMenBtn.style.color = "#fff";
  catMenBtn.style.background = "none";
  catWomenBtn.style.color = "#fff";
  catWomenBtn.style.background = "none";
  catResetBtn.style.color = "#fff";
  catResetBtn.style.background = "none";
  document.querySelector(".searchWord").value = "";
});

function searchProducts() {
  const searchInput = document.querySelector(".searchWord").value;
  const searchURL = productURL + `?search=${searchInput}`;

  getProducts(searchURL);
}

searchBtn.addEventListener("click", function () {
  if (document.querySelector(".searchWord").value) {
    searchProducts();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && document.querySelector(".searchWord").value) {
    searchProducts();
  }
});

clearSearchBtn.addEventListener("click", function () {
  document.querySelector(".searchWord").value = "";
  clearSearchBtn.style.color = "#fff";
  clearSearchBtn.style.background = "none";
  getProducts(productURL);
});
