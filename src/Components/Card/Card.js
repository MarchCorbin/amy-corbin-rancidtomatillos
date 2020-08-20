import React from 'react'
import './Card.scss'


function Card({allMovies}) {
  let eachMovie;

  // return allMovies;
  // if (allMovies !== undefined) { 
    if (allMovies.length) {
    eachMovie = allMovies.map(movie => {

    return (
      <div className="movie-card">
        {movie.title.length > 25 ? 
                <p className='movie-titles'>{movie.title.slice(0, 18)}...</p> : 
                <p className='movie-titles'>{movie.title}</p> }
        {/* <p className="movie-titles">{movie.title}</p> */}
        <img src={movie.poster_path} alt={movie.title}></img>
        <p className="card-text">Avg Rating: {movie.average_rating}</p>
        <p className="card-text">Release Date: {movie.release_date}</p>
      </div>
    )
  })
      }
    return <div className="movies-section">{eachMovie}</div>
}


export default Card;