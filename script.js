
document.querySelector("#joke").onclick = async function() {
  let res = await axios.get("http://api.icndb.com/jokes/random");

  joke.innerHTML = `<h3>${res.data.value.joke}</h3>`;
};
const movieList = ["tt0090927","tt0085862","tt0088936","tt0099399","tt0087727","tt0091055","tt0068935"]
window.onload = async function () {
  for (let i = 0; i < movieList.length; i++) {
    let response = await axios.get(`http://www.omdbapi.com/?i=${movieList[i]}&apikey=ea6ca211`);
    let movie = response.data
    // console.log(movie.Title)
    let movieDisplay = document.querySelector("#movie-display")
   
    let title = document.createElement(`h1`);
    title.textContent = movie.Title;
    let poster = document.createElement(`img`);
    poster.src = movie.Poster;
    let button = document.createElement(`button`)
    button.textContent = 'More Information'
    
    movieDisplay.append(title)
    movieDisplay.append(poster)
    movieDisplay.append(button)
    
    button.onclick = function () { 
      window.open(`https://www.imdb.com/title/${movieList[i]}`)
    };
  }
}
