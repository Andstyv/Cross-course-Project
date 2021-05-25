const contactForm = document.getElementById("contact");

const nameError = document.getElementById("name-error");
const mailError = document.getElementById("email-error");
const telError = document.getElementById("tlf-error");
const txtError = document.getElementById("txt-error");

const contactName = document.querySelector(".contactname");
const contactMail = document.querySelector(".contactmail");
const contactTel = document.querySelector(".contacttel");
const contactMsg = document.querySelector("#contactmsg");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(contactName.value, 0)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  if (validateEmail(contactMail.value)) {
    mailError.style.display = "none";
  } else {
    mailError.style.display = "block";
  }
  if (checkLength(contactTel.value, 8)) {
    telError.style.display = "none";
  } else {
    telError.style.display = "block";
  }
  if (checkLength(contactMsg.value, 20)) {
    txtError.style.display = "none";
  } else {
    txtError.style.display = "block";
  }
}

contactForm.addEventListener("submit", validateForm);

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
