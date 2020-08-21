import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
import { fetchSingleMovieDetails } from '../../Api.js'
import MovieInfo from '../MovieInfo/MovieInfo'

function Card({movieTitle, movieId, moviePoster, movieRating, releaseDate, backdrop}) {

  return (
    <div className = "movie-card" >
   {movieTitle.length > 25 ? <p className='movie-titles'>{movieTitle.slice(0, 18)}...</p> : <p className='movie-titles'>{movieTitle}</p> }
   <Link to={{
     pathname:`/movies/${movieId}`
    }}>
      <img 
        id={movieId} 
        src={moviePoster} 
        alt={movieTitle}>
      </img>
    </Link>
    <p className="card-text">Avg Rating: {movieRating}</p>
    <p className="card-text">Release Date: {releaseDate}</p>
    </div>
  )
}


export default Card;