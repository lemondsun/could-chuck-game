
let joke = document.getElementById("joke")
window.onload = async function() {
  // let city = cityInput.value;
  let response = await axios.get("http://api.icndb.com/jokes/random");
  
  joke.innerHTML=`<h3>${response.data.value.joke}</h3>`
};

let modal = document.getElementById("first-modal");
let button = document.getElementById("first-button")
let span = document.getElementById("close");
button.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display= "none";
}
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";

  }
}
let modalTwo = document.getElementById("second-modal");
let buttonTwo = document.getElementById("second-button");
let spanTwo = document.getElementById("close2");
buttonTwo.onclick = function () {
  modalTwo.style.display = "block";
}
spanTwo.onclick = function () {
  modalTwo.style.display = "none";
}
window.onclick = function (event) {
  if (event.target === modalTwo) {
    modalTwo.style.display = "none";
  }
}