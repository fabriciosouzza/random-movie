async function requestMovie(movieId) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=db6f487c3c45474eb9298e5f522dfbf5`)
    const result = await response.json()
    return result
}

function getRandom() {
    return Math.floor(Math.random() * 100000) + 1;
}

const newMovieButton = document.querySelector('.shuffle_button');

newMovieButton.onclick = () => {
    let randomNumber = getRandom()
    newPoster(randomNumber)

    newTitle(randomNumber)
    newSynopsis(randomNumber)
    newRating(randomNumber)
}


const movieTitle = document.querySelector('#movie_title')
const movieSynopsis = document.querySelector('#movie_synopsis')
const movieRating = document.querySelector('#movie_rating')
const moviePoster = document.querySelector('.movie_poster')


async function newTitle(movieId) {
    let title =  await requestMovie(movieId)
    movieTitle.textContent = title.original_title
}

async function newSynopsis(movieId) {
    let synopsis =  await requestMovie(movieId)
    if (synopsis.overview == undefined || synopsis.overview == null) {
        movieSynopsis.textContent = "We couldn't find a movie, try again!"
    } else {
        movieSynopsis.textContent = synopsis.overview
    }
}

async function newRating(movieId) {
    let rating =  await requestMovie(movieId)
    if (rating.vote_average == undefined || rating.vote_average == null) {
        movieRating.textContent = ''
    }
    else {
        let roundedRating = rating.vote_average.toFixed(2)
        movieRating.textContent = `IMDb Rating: ${roundedRating}`
    }
}

async function newPoster(movieId) {
    let poster =  await requestMovie(movieId)
    if (poster.poster_path == undefined || poster.poster_path == null) {
        moviePoster.src = './assets/sad.svg'
    } else {
        let posterUrl = `https://image.tmdb.org/t/p/w500/${poster.poster_path}`
        moviePoster.src = posterUrl
    }
}
