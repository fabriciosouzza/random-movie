const newMovieButton = document.querySelector('.shuffle_button')

const movieId = 550
const movieInfo = 'overview'

async function requestApi(movieId, movieInfo) {
    response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=db6f487c3c45474eb9298e5f522dfbf5`)
    result = await response.json()

    return result[movieInfo]
}

console.log(requestApi(550, 'overview'))



// .then(response => response.json())
// .then(result => {
//     console.log(result.original_title)
//     console.log(result[movieInfo])
//     console.log(result.popularity)
// })