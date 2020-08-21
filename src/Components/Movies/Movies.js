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


  render() {
    return (
      <section className="movies-container">
        {this.displayAllMovies()}
      </section>
    ) 
  }
}

  export default Movies;