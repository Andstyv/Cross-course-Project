const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const productTitle = document.querySelector(".product-title");
const productContainer = document.querySelector(".product1-lrg");
const prodLrg1 = document.querySelector(".prodlrg-1");
const productPrice = document.querySelector(".itemprice");
const sizeSelector = document.getElementById("sizes");
const baseUrl = "http://cms-ca.styve.digital/wp-json/wc/store/products/";
const productDesc = document.querySelector(".product-description");

const productUrl = baseUrl + id;

async function fetchProductById(url) {
  try {
    const response = await fetch(url);
    const details = await response.json();
    const variations = details.variations;

    prodLrg1.innerHTML = `<a href="#"> <img src="${details.images[0].src}" alt="${details.images[0].alt}" class="jacketimg_blue-lrg" /></a>`;
    productTitle.innerHTML = `${details.name}`;

    variations.forEach(function (variations) {
      sizeSelector.innerHTML += `<option value="${variations.id}" label="${variations.attributes[0].value}">${variations.attributes[0].value}</option>`;
    });

    productDesc.innerHTML = `${details.description}`;
    productPrice.innerHTML = `Price: ${details.prices.price / 100} ,-`;
  } catch (err) {
    console.log(err);
  }
}
fetchProductById(productUrl);

sizeSelector.onchange = function (event) {
  const newUrl = baseUrl + `${event.target.value}`;

  fetchProductById(newUrl);
};
