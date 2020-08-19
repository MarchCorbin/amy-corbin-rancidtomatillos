import React from 'react'
import './Card.scss'


function Card({allMovies}) {
  let eachMovie;
  console.log('zine', allMovies)
  // return allMovies;
  // if (allMovies !== undefined) { 
    if (allMovies.length) {
    eachMovie = allMovies.map(movie => {
    console.log('here', movie)  
    return (
      <div className="movie-card">
        <p>{movie.title}</p>
        <img src={movie.poster_path}></img>
        <p>{movie.average_rating}</p>
        <p>{movie.release_date}</p>
      </div>
    )
  })
      }
    return <h1>{eachMovie}</h1>
}


export default Card;