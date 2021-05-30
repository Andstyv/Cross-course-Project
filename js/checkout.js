function randomNum() {
  const randomOrderNo = document.querySelector(".orderID");
  let randomNo = Math.floor(Math.random() * 100000);

  randomOrderNo.textContent = `Order ID: #${randomNo}`;
  console.log(randomNo);
}
randomNum();
