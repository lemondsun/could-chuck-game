// const chuckedSection = document.getElementById("chucked-up-section");
// let joke = document.getElementById("joke");
// let chuckChoice = document.querySelector(".chuck-choice");
// let chuckChoiceTwo = document.querySelector(".chuck-choice2");
document.querySelector("#joke").onclick = async function() {
  let res = await axios.get("http://api.icndb.com/jokes/random");

  joke.innerHTML = `<h3>${res.data.value.joke}</h3>`;
};
const movieList = ["tt0090927","tt0085862","tt0088936","tt0099399","tt0087727","tt0091055","tt0068935"]
window.onload = async function () {
  for (let i = 0; i < movieList.length; i++) {
    let response = await axios.get(`http://www.omdbapi.com/?i=${movieList[i]}&apikey=ea6ca211`);
    let movie = response.data
    console.log(movie.Title)
    let movieDisplay = document.querySelector("#movie-display")
   
    let title = document.createElement(`h1`);
    title.textContent = movie.Title;
    let poster = document.createElement(`img`);
    poster.src = movie.Poster;
      
    movieDisplay.append(title)
    movieDisplay.append(poster)
  }
  

   
}
// window.onload = async function () {
  
//   let response = await axios.get(`http://www.omdbapi.com/?i=${movieList[1]}&apikey=ea6ca211`);
//   let movie = response.data
//   console.log(movie.Title)
//   let movieDisplay = document.querySelector("#movie-display")
 
//     let title = document.createElement(`h1`);
//     title.textContent =  movie.Title;
//     let poster = document.createElement(`img`);
//     poster.src = movie.Poster;
    
//     movieDisplay.append(title)
//     movieDisplay.append(poster)
 
// }
// const DOMAIN = "http://www.omdbapi.com/";
// const API_KEY = "ea6ca211";
// const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;

// button.addEventListener("click", async function() {
//   let movName = []
//   let response = await axios.get(`${BASE_URL}s=${movName}`);
//   let movPic = response.data.Search;

//   renderList(movPic);
  
// });
// let modal = document.getElementById("first-modal");
// let button = document.getElementById("first-button");
// let span = document.getElementById("close");
// let homeButton = document.querySelector(".return-home");

// button.onclick = function() {
//   modal.style.display = "block";
// };
// span.onclick = function() {
//   modal.style.display = "none";
// };
// window.onclick = function(event) {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// };

// let pageOneBackground = document.getElementById("background");
// let pageTwoBackground = document.getElementById("second-background");

// document.getElementById("bring-second-page").onclick = function(event) {
//   pageOneBackground.style.display = "none";
//   pageTwoBackground.style.display = "block";
//   if ((pageTwoBackground.style.display = "block")) {
//     pageTwoBackground.appendChild(chuckedSection);
//   }
// };

// // code for qoutes
// let trueQuotes = [
//   "The epic fight scene between Norris and Bruce Lee in Way of the Dragon? Yeah, it wasn’t choreographed.",
//   "his name is actually Carlos. Carlos Ray Norris",
//   "Norris was born in Ryan, Oklahoma",
//   "he hasn’t lost an official fight for more than half a century.",
//   "Bruce Lee, at whose funeral Chuck was one of the pallbearers, together with McQueen.",
//   "Translated as “The Universal Way”, Chun Kuk Do is a hybrid Korean martial art style patented by none other than Chuck Norris himself"
// ];
// let trueChoice = trueQuotes[Math.floor(Math.random() * trueQuotes.length)];
// let falseQuotes = [
//   "Chuck Norris once poisioned a rattlesnake",
//   "His father was actually a Martial Arts master, this fueled Norris's passion for the art.",
//   "He is a huge fan of the Wu-Tang rap group",
//   "He has never been killed on screen",
//   "He has never played the role of a villian."
// ];
// let falseChoice = falseQuotes[Math.floor(Math.random() * falseQuotes.length)];
// let allChoices = trueQuotes.concat(falseQuotes);
// let optionLeft = allChoices[Math.floor(Math.random() * allChoices.length)];
// chuckChoice.innerHTML = optionLeft;

// // code to determine if quotes are true
// let answerForChoiceOne = "";
// if (trueQuotes.includes(optionLeft)) {
//   answerForChoiceOne = "correct";
// } else if (!trueQuotes.includes(optionLeft)) {
//   answerForChoiceOne = "wrong";
// }

// // let answerForChoiceTwo = "";
// // if (trueQuotes.includes(optionRight)) {
// //   answerForChoiceTwo = "correct";
// // } else {
// //   answerForChoiceTwo = "wrong";
// // }

// let trueButton = document.querySelector("#true-button");
// let falseButton = document.querySelector("#false-button");
// let youreRightPage = document.querySelector("#youre-right-page");
// let youreWrongPage = document.querySelector("#youre-wrong-page");

// const trueRight = function() {
//   if (answerForChoiceOne === "correct") {
//     pageTwoBackground.style.display = "none";
//     youreRightPage.style.display = "block";
//     // let homeButton = document.querySelector(".return-home");
//     homeButton.onclick = function() {
//       youreRightPage.style.display = "none";
//       pageOneBackground.style.display = "block";
//       // console.log("phone home");
//     };
//   } else if
//   (answerForChoiceOne !== "correct") {
//     pageTwoBackground.style.display = "none";
//     youreWrongPage.style.display = "block";
//     // homeButton.onclick = function() {
//     //   // youreWrongPage.style.display = "none";
//     //   // pageOneBackground.style.display = "block";
//     //   console.log("phone home");
//     // };
//     homeButton.onclick = function() {
//       youreRightPage.style.display = "none";
//       pageOneBackground.style.display = "block";
//       // console.log("phone home");
//     };
//   }
// };
// // const trueWrong = function() {
// //   if (answerForChoiceOne !== "correct") {
// //     pageTwoBackground.style.display = "none";
// //     youreWrongPage.style.display = "block";
// //     // homeButton.onclick = function() {
// //     //   // youreWrongPage.style.display = "none";
// //     //   // pageOneBackground.style.display = "block";
// //     //   console.log("phone home");
// //     // };
// //     homeButton.onclick = function() {
// //       youreRightPage.style.display = "none";
// //       pageOneBackground.style.display = "block";
// //       // console.log("phone home");
// //     };
// //   }
// // };

// const clickme = () => {
//   console.log("clicked");
// };


// const falseRight = function() {
//   if (answerForChoiceOne !== "correct") {
//     pageTwoBackground.style.display = "none";
//     youreRightPage.style.display = "block";
//     homeButton.onclick = function() {
//       youreRightPage.style.display = "none";
//       pageOneBackground.style.display = "block";
//       // console.log("phone home");
//     };
//   }
// };
// const falseWrong = function() {
//   if (answerForChoiceOne === "correct") {
//     pageTwoBackground.style.display = "none";
//     youreWrongPage.style.display = "block";
//     // homeButton.onclick = function() {
//     //   console.log("phone home");
//     // };
//     homeButton.onclick = function() {
//       youreRightPage.style.display = "none";
//       pageOneBackground.style.display = "block";
//       // console.log("phone home");
//     };
//   }
// };

// trueButton.addEventListener("click", trueRight);
// // trueButton.addEventListener("click", trueWrong);
// falseButton.addEventListener("click", falseRight);
// falseButton.addEventListener("click", falseWrong);

// // keeping score
// let playerScore = 25;
// document.querySelector("#score").innerHTML = `<p>${playerScore}</p>`;
// if (youreRightPage.style.display === "block") {
//   playerScore += 10;
//   console.log(playerScore);
// }
// if (youreWrongPage.style.display === "block") {
//   playerScore -= 5;
//   console.log(playerScore);
// }
