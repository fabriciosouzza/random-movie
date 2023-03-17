// async function to get the json api info
async function requestMovie(movieId) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=db6f487c3c45474eb9298e5f522dfbf5`)
    const result = await response.json()
    return result
}

function getRandom() {
    return Math.floor(Math.random() * 1000) + 1;
}

const newMovieButton = document.querySelector('.shuffle_button');

newMovieButton.onclick = () => {
    let randomNumber = getRandom()
    newTitle(randomNumber)
    newSynopsis(randomNumber)
}


const movieTitle = document.querySelector('#movie_title')
const movieSynopsis = document.querySelector('#movie_synopsis')


async function newTitle(movieId) {
    let title =  await requestMovie(movieId)
    movieTitle.innerHTML = title.original_title
}

async function newSynopsis(movieId) {
    let synopsis =  await requestMovie(movieId)
    movieSynopsis.innerHTML = synopsis.overview
}


