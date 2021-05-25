const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartContainer = document.querySelector(".cart-item");
const price = document.querySelector(".price");
const shipping = document.querySelector(".shipping");
const subtotal = document.querySelector("#subsum");

cartContainer.innerHTML = "";
let newSum = 0;

cartItems.forEach(function (product) {
  cartContainer.innerHTML += `
    <div class="product-info">
    <img src="${product.image}" alt="${product.name}" class="cart-img">
    <div class="product-spec">
    <h3>${product.name}</h3>
    <h3>COLOR: </h3>
    <h3>Size: ${product.size}</h3>
    <h3>Price: ${product.price}</h3>
    `;
  price.innerHTML = `<h3>Price</h3>
<h3>${newSum}</h3>`;

  shipping.innerHTML = `<h3>Shipping</h3>
    <h3>FREE</h3>`;

  newSum = 0;
  for (let i = 0; i < cartItems.length; i++) {
    newSum += product.price;
  }
  subtotal.innerHTML = `<h3>${newSum}</h3>`;
});
console.log(newSum);
