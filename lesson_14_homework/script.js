const form = document.getElementById('movie-form');
const moviesGrid = document.getElementById('movies-grid');
const clearButton = document.getElementById('clear-list');
let movies = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const poster = document.getElementById('poster').value;
    })

    function createList() {
        taskList.map((el) => {
          const li = document.createElement("li");
          li.innerText = `${el.title}: ${el.author}: ${el.year}: ${el.poster}`;
          
          li.onclick = changeStatus
         
          ul.append(li);
        });

const addFilmToPage = ()=> {
filmList.map(el =>{
    const section = document.createElement("section")
    const img = document.createElement("img")


    section.append(h2,p,img)
})


}
    const movie = { title, author, year, poster };
    movies.push(movie);
    renderMovies();
    form.reset();
}

clearButton.addEventListener('click', function() {
    movies = [];
    renderMovies();
});

function deleteMovie(index) {
    movies.splice(index, 1);
    renderMovies();
}