const cartContainer = document.querySelector(".cart-item");
const shipping = document.querySelector(".shipping");
const totalPrice = document.querySelector("#price-total");
const subtotal = document.querySelector("#subsum");
const showCheckout = document.querySelector(".submit-checkout");
const checkout = document.querySelector(".checkout-container");
const removeItems = document.querySelector(".remove-item");
const backBtn = document.querySelector("#go-back");

const cartItems = JSON.parse(localStorage.getItem("cartList"));

let cartArray = cartItems || [];

showCheckout.addEventListener("click", function () {
  checkout.style.display = "flex";
  showCheckout.style.display = "none";
  removeItems.style.display = "none";
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
  localStorage.setItem("cartList", JSON.stringify([]));
});

if (cartArray.length) {
  cartArray.forEach(function (product) {
    cartContainer.innerHTML += `
    <div class="product-info">
    <img src="${product.img}" alt="${product.name}" class="cart-img">
    <div class="product-spec">
    <h3>${product.name}</h3>
    </br>

    <h3><i>${product.size}</i></h3>
    <h3>Price: <i>${product.price}</i></h3>
    `;

    shipping.innerHTML = `<h3>Shipping</h3>
    <h3>FREE</h3>`;

    newSum = 0;
    for (let i = 0; i < cartArray.length; i++) {
      newSum += product.price;
    }
    totalPrice.innerHTML = `<h3>${newSum}</h3>`;
    subtotal.innerHTML = `<h3>${newSum}</h3>`;
  });
} else {
  cartContainer.innerHTML = `<h2>Cart is empty</h2>`;
}
