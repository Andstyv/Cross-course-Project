const checkoutForm = document.getElementById("checkout-form");

const chkNameError = document.getElementById("checkout-name-error");
const chkMailError = document.getElementById("checkout-mail-error");
const chkTelError = document.getElementById("checkout-tel-error");
const chkAddError = document.getElementById("checkout-add-error");
const chkZipError = document.getElementById("checkout-zip-error");
const chkCityError = document.getElementById("checkout-city-error");

const contactName = document.querySelector(".contactname");
const contactMail = document.querySelector(".contactmail");
const contactTel = document.querySelector(".contacttel");
const contactAdd = document.querySelector(".contactad");
const contactZip = document.querySelector(".zipcode");
const contactCity = document.querySelector(".city");

function validateCheckout(event) {
  event.preventDefault();

  if (checkLength(contactName.value, 0)) {
    chkNameError.style.display = "none";
  } else {
    chkNameError.style.display = "block";
  }
  if (validateEmail(contactMail.value)) {
    chkMailError.style.display = "none";
  } else {
    chkMailError.style.display = "block";
  }
  if (validateTel(contactTel.value)) {
    chkTelError.style.display = "none";
  } else {
    chkTelError.style.display = "block";
  }
  if (checkLength(contactAdd.value, 0)) {
    chkAddError.style.display = "none";
  } else {
    chkAddError.style.display = "block";
  }
  if (validateZip(contactZip.value)) {
    chkZipError.style.display = "none";
  } else {
    chkZipError.style.display = "block";
  }
  if (checkLength(contactCity.value, 0)) {
    chkCityError.style.display = "none";
  } else {
    chkCityError.style.display = "block";
  }
  if (
    checkLength(contactName.value, 0) &&
    validateEmail(contactMail.value) &&
    validateTel(contactTel.value) &&
    checkLength(contactAdd.value, 0) &&
    validateZip(contactZip.value) &&
    checkLength(contactCity.value, 0)
  ) {
    setTimeout(function () {
      window.location.href = "checkout-success.html";
    }, 1000);
  }
}

checkoutForm.addEventListener("submit", validateCheckout);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(contactMail) {
  const regEx = /\S+@\S+\.\S+/;
  const emailMatch = regEx.test(contactMail);
  return emailMatch;
}

function validateZip(contactZip) {
  const regExZip = /^\d{4}$/;
  const zipMatch = regExZip.test(contactZip);
  return zipMatch;
}
function validateTel(contactTel) {
  const regExTel = /^[0-9]{8}$/;
  const telMatch = regExTel.test(contactTel);
  return telMatch;
}
