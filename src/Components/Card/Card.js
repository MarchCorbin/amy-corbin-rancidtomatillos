import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
import { fetchSingleMovieDetails } from '../../Api.js'
import MovieInfo from '../MovieInfo/MovieInfo'

function Card({movieTitle, movieId, moviePoster, movieRating, releaseDate, backdrop, userRating}) {
  return (
    <div className = "movie-card" placeholder="mov-card">
   {movieTitle.length > 25 ? <p className='movie-titles'>{movieTitle.slice(0, 18)}...</p> : <p className='movie-titles'>{movieTitle}</p> }
   <Link to={{
     pathname:`/movies/${movieId}`
    }}>
      <img
        className='movie-poster' 
        id={movieId} 
        src={moviePoster} 
        alt={movieTitle}>
      </img>
     </Link>
    <p className="card-text">Avg Rating: {movieRating}</p>
    <p className="card-text">Release Date: {releaseDate}</p>
  {userRating !== undefined ? <p className='rating-text'>Your Rating: {userRating}</p> : <p>not yet rated</p>}
    </div>
  )
}

Card.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired
  movieId: PropTypes.number.isRequired,
  moviePoster: PropTypes.string.isRequired,
  movieRating: PropTypes.number.isRequired,
  releaseDate: PropTypes.string.isRequired,
  backdrop: PropTypes.number.isRequired,
}


export default Card;