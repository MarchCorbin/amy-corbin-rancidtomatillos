import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

function Card({movieTitle, movieId, moviePoster, movieRating, releaseDate, backdrop, userRating, isLoggedIn}) {
  return (
    <div className = "movie-card" placeholder="mov-card">
   {movieTitle.length > 15 ? <p className='movie-titles'>{movieTitle.slice(0, 15)}...</p> : <p className='movie-titles'>{movieTitle}</p> }
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
  
  {isLoggedIn && userRating !== '' && <p className='rating-text'>Your Rating: {userRating}</p> }
    </div>
  )
}

export default Card;

Card.propTypes = {
  movieTitle: PropTypes.string,
  movieId: PropTypes.number,
  moviePoster: PropTypes.string,
  movieRating: PropTypes.string,
  releaseDate: PropTypes.string,
  backdrop: PropTypes.string
}

