import { productsArray } from "./productList.js";

let cartArray = [];

const addToCart = document.querySelectorAll(".prod-addcart");
const numberOfItems = document.querySelector(".numberOfItems");
const numberOfItems2 = document.querySelector(".numberOfItems2");
const itemPrice = document.querySelector(".itemprice");
const showCartBtn = document.querySelector(".gocart-btn ");
const addSuccess = document.querySelector(".add-success");

const selectedSize = document.querySelector(".sizes");

console.log(selectedSize);

let sel = document.getElementById("sizes");

// addToCart.forEach(function (button) {
//   button.onclick = function (event) {
//     const productAdd = productsArray.find((item) => item.id === sel.value);

//     cartArray.push(productAdd);
//     numberOfItems.style.display = "inline";
//     numberOfItems2.style.display = "inline";
//     numberOfItems.innerHTML = `${cartArray.length}`;
//     numberOfItems2.innerHTML = `${cartArray.length}`;
//     localStorage.setItem("cartList", JSON.stringify(cartArray));

//     showCartBtn.style.display = "block";
//     addSuccess.style.display = "block";

//     setInterval(function () {
//       addSuccess.style.display = "none";
//     }, 2000);
//   };
// });
// sel.addEventListener("change", function () {
//   const productAdd = productsArray.find((item) => item.id === sel.value);
//   itemPrice.textContent = `${productAdd.price} ,-`;
// });
