const whatBtn = document.getElementById('what-to-watch');
const howBtn = document.getElementById('how-to-watch');
const whoBtn = document.getElementById('who-is-watching');

const content = document.getElementById('content-container');


whatBtn.addEventListener('click', ()=>{
    //TODO resets the content
    content.innerHTML = '';
    loadMovies();

});

howBtn.addEventListener('click', ()=>{

    content.innerHTML = '';
    loadLogin();

});

async function loadMovies(){

        var moviesObject;

        //TODO gets the json and the HTML for each movie
        const contentResponse = await (await fetch('content/movies.html')).text();
        const jsonMovies =  await (await fetch('script/jsonFiles/movies.json')).text();

        
        
        const movies = JSON.parse(jsonMovies);
        let index = 0;
        for(let movie in movies){

            console.log(movies[movie])

            content.innerHTML += contentResponse;
            populateMovies(movies[movie], index);
            index++;

        }        
        
}

async function loadLogin(){

    const contentResponse = await(await fetch('content/login.html')).text();

    content.innerHTML = contentResponse;

}

function populateMovies(content, index){

    const title = document.querySelectorAll('[data-title]');
    const subtitle = document.querySelectorAll('[data-subtitle]');
    const synopsis = document.querySelectorAll('[data-synopsis]');
    const url = document.querySelectorAll('[data-url]');
    
    title[index].innerHTML = content.title;
    subtitle[index].innerHTML = content.subtitle;
    synopsis[index].innerHTML = content.synopsis;
    url[index].setAttribute('src', content.url);

}