const addToCart = document.querySelector(".addcart-btn");
const showCartBtn = document.querySelector(".gocart-btn ");
const addSuccess = document.querySelector(".add-success");
const numberOfItems = document.querySelector(".numberOfItems");
const numberOfItems2 = document.querySelector(".numberOfItems2");

let cartArray = [];

async function fetchToCart(url) {
  try {
    const response = await fetch(url);
    const details = await response.json();

    let productId = details.id;
    let productName = details.name;
    let productPrice = details.prices.price / 100;
    let productImg = details.images[0].src;
    let productSize = details.variation;

    let cartObject = {
      id: productId,
      name: productName,
      price: productPrice,
      img: productImg,
      size: productSize,
    };

    cartArray.push(cartObject);

    localStorage.setItem("newList", JSON.stringify(cartArray));
    showCartBtn.style.display = "block";
    addSuccess.style.display = "block";
    numberOfItems.style.display = "inline";
    numberOfItems2.style.display = "inline";
    numberOfItems.innerHTML = `${cartArray.length}`;
    numberOfItems2.innerHTML = `${cartArray.length}`;

    setInterval(function () {
      addSuccess.style.display = "none";
    }, 2000);

    console.log(details);
  } catch (err) {
    console.log(err);
  }
}

addToCart.onclick = function () {
  let value = sizeSelector.options[sizeSelector.selectedIndex].value;

  const testUrl = "http://cms-ca.styve.digital/wp-json/wc/store/products/" + value;

  fetchToCart(testUrl);
};