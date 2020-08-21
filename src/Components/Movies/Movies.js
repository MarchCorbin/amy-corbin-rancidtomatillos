import React, { Component } from 'react'
import { fetchAllMovies } from '../../Api'
import Card from '../Card/Card'
import './Movies.scss'

class Movies extends Component {
  constructor() {
    super()
    this.state = {
      allMovies: []
    }
  }

  componentDidMount() {
    fetchAllMovies()
    .then(data => {this.setMovieState(data.movies)})
    .catch(error => console.log(error))
  }

  setMovieState(data) {
    this.setState({allMovies: data})
  }

  displayAllMovies() {
    if (this.state.allMovies.length) {
      return this.state.allMovies.map(movie => {
        return <Card
          movieTitle={movie.title}
          movieId={movie.id}
          moviePoster={movie.poster_path}
          movieRating={movie.average_rating}
          releaseDate={movie.release_date}
          backdrop={movie.backdrop_path}
        />
      })
    }
  }

  // function displayAllMovies() {
  //   if (allMovies.length) {
  //   return allMovies.map(movie => {
  //   return (
  //     <div className="movie-card">
  //       {movie.title.length > 25 ? 
  //         <p className='movie-titles'>{movie.title.slice(0, 18)}...</p> : 
  //         <p className='movie-titles'>{movie.title}</p> }
  //       <img id={movie.id} src={movie.poster_path} alt={movie.title}></img>
  //       <p className="card-text">Avg Rating: {movie.average_rating}</p>
  //       <p className="card-text">Release Date: {movie.release_date}</p>
  //     </div>
  //   )
  //   })
  //     }
  //   }
  //   return <div className="movies-section">{displayAllMovies()}</div>

  render() {
    return (
      <section className="movies-container">
        {this.displayAllMovies()}
      </section>
    ) 
  }
}

  export default Movies;