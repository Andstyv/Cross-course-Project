const hambButton = document.querySelector(".iconButton");
const dropdownContent = document.querySelector(".dropdown-content");
const prodMenu = document.querySelector(".prod-menu");

hambButton.addEventListener("click", function () {
  console.log("click");
  console.log(dropdownContent);

  dropdownContent.style.display == "block" ? (dropdownContent.style.display = "none") : (dropdownContent.style.display = "block");
});

prodMenu.addEventListener("click", function () {
  console.log("click");
  console.log(dropdownContent);

  dropdownContent.style.display == "block" ? (dropdownContent.style.display = "none") : (dropdownContent.style.display = "block");
});
