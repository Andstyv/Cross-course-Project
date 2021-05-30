const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartContainer = document.querySelector(".cart-item");
const price = document.querySelector(".price");
const shipping = document.querySelector(".shipping");
const totalPrice = document.querySelector("#price-total");
const subtotal = document.querySelector("#subsum");
const showCheckout = document.querySelector(".submit-checkout");
const checkout = document.querySelector(".checkout-container");
const removeItems = document.querySelector(".remove-item");
const productInfo = document.querySelectorAll(".product-info");
const backBtn = document.querySelector("#go-back");

showCheckout.addEventListener("click", function () {
  checkout.style.display = "flex";
  showCheckout.style.display = "none";
  removeItems.style.display = "none";
});

backBtn.addEventListener("click", function () {
  window.history.back();
});

cartContainer.innerHTML = "";
let newSum = 0;

removeItems.addEventListener("click", function () {
  cartContainer.innerHTML = `<h2>Cart is empty</h2>`;
  removeItems.style.display = "none";
  cartContainer.style.borderBottom = "none";
  totalPrice.innerHTML = `<h3>-</h3>`;
  subtotal.innerHTML = `<h3>-</h3>`;
  shipping.innerHTML = `<h3>-</h3>`;
});

cartItems.forEach(function (product) {
  cartContainer.innerHTML += `
    <div class="product-info">
    <img src="${product.image}" alt="${product.name}" class="cart-img">
    <div class="product-spec">
    <h3>${product.name}</h3>
    </br>
    <h3>Color: <i>${product.color}</i></h3>
    <h3>Size: <i>${product.size}</i></h3>
    <h3>Price: <i>${product.price}</i></h3>
    `;

  shipping.innerHTML = `<h3>Shipping</h3>
    <h3>FREE</h3>`;

  newSum = 0;
  for (let i = 0; i < cartItems.length; i++) {
    newSum += product.price;
  }
  totalPrice.innerHTML = `<h3>${newSum}</h3>`;
  subtotal.innerHTML = `<h3>${newSum}</h3>`;
});
