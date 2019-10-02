const chuckedSection = document.getElementById("chucked-up-section");
let joke = document.getElementById("joke");
let chuckChoice = document.querySelector(".chuck-choice");
let chuckChoiceTwo = document.querySelector(".chuck-choice2");
window.onload = async function() {
  let response = await axios.get("http://api.icndb.com/jokes/random");

  joke.innerHTML = `<h3>${response.data.value.joke}</h3>`;
};

let modal = document.getElementById("first-modal");
let button = document.getElementById("first-button");
let span = document.getElementById("close");
button.onclick = function() {
  modal.style.display = "block";
};
span.onclick = function() {
  modal.style.display = "none";
};
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
// let modalTwo = document.getElementById("second-modal");
// let buttonTwo = document.getElementById("second-button");
// let spanTwo = document.getElementById("close2");
let pageOneBackground = document.getElementById("background");
let pageTwoBackground = document.getElementById("second-background");
// buttonTwo.onclick = function() {
//   modalTwo.style.display = "block";
// };
// spanTwo.onclick = function() {
//   modalTwo.style.display = "none";
// };
// window.onclick = function(event) {
//   if (event.target === modalTwo) {
//     modalTwo.style.display = "none";
//   }
// };
document.getElementById("bring-second-page").onclick = function(event) {
  pageOneBackground.style.display = "none";
  pageTwoBackground.style.display = "block";
  if ((pageTwoBackground.style.display = "block")) {
    pageTwoBackground.appendChild(chuckedSection);
  }
};
// document.getElementById("bring-second-page2").onclick = function(event) {
//   pageOneBackground.style.display = "none";
//   pageTwoBackground.style.display = "block";
//   if ((pageTwoBackground.style.display = "block")) {
//     pageTwoBackground.appendChild(chuckedSection);
//   }
// };

// code for qoutes
let trueQuotes = [
  "The epic fight scene between Norris and Bruce Lee in Way of the Dragon? Yeah, it wasn’t choreographed.",
  "his name is actually Carlos. Carlos Ray Norris",
  "Norris was born in Ryan, Oklahoma",
  "he hasn’t lost an official fight for more than half a century.",
  "Bruce Lee, at whose funeral Chuck was one of the pallbearers, together with McQueen.",
  "Translated as “The Universal Way”, Chun Kuk Do is a hybrid Korean martial art style patented by none other than Chuck Norris himself"
];
let trueChoice = trueQuotes[Math.floor(Math.random() * trueQuotes.length)];
let falseQuotes = [
  "Chuck Norris once poisioned a rattlesnake",
  "His father was actually a Martial Arts master, this fueled Norris's passion for the art.",
  "He is a huge fan of the Wu-Tang rap group",
  "He has never been killed on screen",
  "He has never played the role of a villian."
];
let falseChoice = falseQuotes[Math.floor(Math.random() * falseQuotes.length)];
let allChoices = trueQuotes.concat(falseQuotes);
let optionLeft = allChoices[Math.floor(Math.random() * allChoices.length)];
chuckChoice.innerHTML = optionLeft;
// let optionRight = allChoices[Math.floor(Math.random() * allChoices.length)];
// chuckChoiceTwo.innerHTML = optionRight;

// code to determine if quotes are true
let answerForChoiceOne = "";
if (trueQuotes.includes(optionLeft)) {
  answerForChoiceOne = "correct";
} else {
  answerForChoiceOne = "wrong";
}

// let answerForChoiceTwo = "";
// if (trueQuotes.includes(optionRight)) {
//   answerForChoiceTwo = "correct";
// } else {
//   answerForChoiceTwo = "wrong";
// }

let trueButton = document.querySelector("#true-button");
let falseButton = document.querySelector("#false-button");
let youreRightPage = document.querySelector("#youre-right-page");
let youreWrongPage = document.querySelector("#youre-wrong-page");

const trueRight = function() {
  if (answerForChoiceOne === "correct") {
    pageTwoBackground.style.display = "none";
    youreRightPage.style.display = "block";
  }
};
const trueWrong = function() {
  if (answerForChoiceOne !== "correct") {
    pageTwoBackground.style.display = "none";
    youreWrongPage.style.display = "block";
  }
};
const falseRight = function() {
  if (answerForChoiceOne !== "correct") {
    pageTwoBackground.style.display = "none";
    youreRightPage.style.display = "block";
  }
};
const falseWrong = function() {
  if (answerForChoiceOne === "correct") {
    pageTwoBackground.style.display = "none";
    youreWrongPage.style.display = "block";
  }
};

trueButton.addEventListener("click", trueRight);
trueButton.addEventListener("click", trueWrong);
falseButton.addEventListener("click", falseRight);
falseButton.addEventListener("click", falseWrong);

// keeping score
let playerScore = 25;
if (youreRightPage.style.display === "block") {
  playerScore += 10;
  console.log(playerScore);
}
if (youreWrongPage.style.display === "block") {
  playerScore -= 5;
  console.log(playerScore);
}
