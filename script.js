
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
let pageOneBackground = document.getElementById("background")
let pageTwoBackground = document.getElementById("second-background")
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
document.getElementById("bring-second-page").onclick = function (event) {
  pageOneBackground.style.display = "none";
  pageTwoBackground.style.display = "block";
}


let chuckScore = document.getElementById("score");
PlayChuckWood = () => {

}