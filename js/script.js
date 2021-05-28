import { productsArray } from "./productList.js";
console.log(productsArray);
let cartArray = [];

const addToCart = document.querySelectorAll(".prod-addcart");
const numberOfItems = document.querySelector(".numberOfItems");
const itemPrice = document.querySelector(".itemprice");

let sel = document.getElementById("sizes");

addToCart.forEach(function (button) {
  button.onclick = function (event) {
    const productAdd = productsArray.find((item) => item.id === sel.value);
    console.log(sel.value);
    console.log(productAdd.size);

    cartArray.push(productAdd);
    console.log(cartArray);
    numberOfItems.innerHTML = `${cartArray.length}`;
    localStorage.setItem("cartList", JSON.stringify(cartArray));

    // viewCart(cartArray);
  };
});
sel.addEventListener("change", function () {
  console.log(sel.value);
  const productAdd = productsArray.find((item) => item.id === sel.value);
  console.log(productAdd.price);
  itemPrice.textContent = `${productAdd.price} ,-`;

  //   if (sel.value === "1" || "11") {
  //     console.log("Størrelse 1");
  //     itemPrice.textContent = `999 ,-`;
  //   } else if (sel.value === "2") {
  //     console.log("Størrelse 2");
  //     itemPrice.textContent = `1 099 ,-`;
  //   } else {
  //     console.log("Strrelse 3");
  //     itemPrice.textContent = `1 199 ,-`;
  //   }
});

// function viewCart(cartItems) {
//   cartContainer.innerHTML = "";
//   cartItems.forEach(function (cartElement) {
//     cartContainer.innerHTML += `
//     <div class="product-info">
//     <img src="${product.image}" alt="${product.name}" class="cart-img"></div>
//     <div class="product-spec">
//     <h3>${product.name}</h3>
//     <h3>COLOR: </h3>
//     <h3>SIZE: </h3></div>
//     `;
//   });
// }

// function getSelValue() {
//   let selectedValue = document.getElementById("sizes").value;
//   console.log(selectedValue);
// }
// getSelValue();
