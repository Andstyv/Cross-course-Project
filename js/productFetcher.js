const productURL = "https://cms-ca.styve.digital/wp-json/wc/store/products";
const productsContainer = document.querySelector(".products-grid");
const cartItems = JSON.parse(localStorage.getItem("cartList"));
const numberOfItems = document.querySelector(".numberOfItems");

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();

  console.log(cartItems.length);

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
