let api='https://www.omdbapi.com/?apikey=83beb3ab&t=';

let title=document.getElementById("title");
let releaseDate = document.getElementById("release-date");
let runtime = document.getElementById("runtime");
let genre = document.getElementById("genre");
let director = document.getElementById("director");
let actor = document.getElementById("actor");
let plot = document.getElementById("plot");
let language = document.getElementById("language");
let award= document.getElementById("award");
let image=document.getElementById('img');
let content=document.getElementById('content');
let rate=document.getElementById('rate');
content.classList.add('d-none');

function search(){
  let moviename = document.getElementById('moviename');
  let query=api+moviename.value;
  fetch(query).then((data)=>{
    return data.json();
   }).then((data)=>{
    content.classList.remove('d-none')
    title.innerText=data.Title;
    releaseDate.innerText=data.Released;
    runtime.innerText=data.Runtime;
    genre.innerText=data.Genre;
    director.innerText=data.Director;
    actor.innerText=data.Actors;
    plot.innerText=data.Plot;
    language.innerText=data.Language;
    award.innerText=data.Awards;
    img.src=data.Poster;
    rate.innerText=data.imdbRating
     
   });
}
