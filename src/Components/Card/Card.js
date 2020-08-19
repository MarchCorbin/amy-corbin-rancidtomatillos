import React from 'react'

function Card({allMovies}) {
  let eachMovie;
  console.log('zine', allMovies)
  // return allMovies;
  // if (allMovies !== undefined) { 
    if (allMovies.length) {
    eachMovie = allMovies.map(movie => {
    console.log('here', movie)  
    return (
      <div>
        <img src={movie.poster_path}></img>
      </div>
    )
  })
    
      }
  
    // }
    return <h1>{eachMovie}</h1>
}


export default Card;