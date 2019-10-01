const chuckedSection = document.getElementById("chucked-up-section")
let joke = document.getElementById("joke")
let chuckTruths = document.getElementsByClassName("chuck-truths")

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
document.getElementById('bring-second-page').onclick = function (event) {
  pageOneBackground.style.display = "none";
  pageTwoBackground.style.display = "block";
  if (pageTwoBackground.style.display = "block") {
    pageTwoBackground.appendChild(chuckedSection)
  }
};
document.getElementById('bring-second-page2').onclick = function (event) {
  pageOneBackground.style.display = "none";
  pageTwoBackground.style.display = "block";
  if (pageTwoBackground.style.display = "block") {
    pageTwoBackground.appendChild(chuckedSection)
  }
};

// logic for qoutes
let trueQuotes = [`The epic fight scene between Norris and Bruce Lee in Way of the Dragon? Yeah, it wasn’t choreographed.`, `his name is actually Carlos. Carlos Ray Norris`, `Norris was born in Ryan, Oklahoma`, `he hasn’t lost an official fight for more than half a century.`, `Bruce Lee, at whose funeral Chuck was one of the pallbearers, together with McQueen.`, `Translated as “The Universal Way”, Chun Kuk Do is a hybrid Korean martial art style patented by none other than Chuck Norris himself`]
let trueChoice = trueQuotes[Math.floor(Math.random() * trueQuotes.length)];

chuckTruths.innerHTML = `<p>${trueChoice}</P>`
// let chuckScore = document.getElementById("score");
// PlayChuckWood = () => {

// }