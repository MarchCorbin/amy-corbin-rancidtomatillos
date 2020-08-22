import React, { Component } from 'react'
import { fetchAllMovies } from '../../Api'
import Card from '../Card/Card'
import './Movies.scss'
import PropTypes from 'prop-types'

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
    .catch(error => alert(error.message))
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
    let moviesDisplay = this.displayAllMovies();
    return (
      <section className="movies-container" placeholder="mov-card">
        {moviesDisplay}
      </section>
    ) 
  }
}

  export default Movies;

  Movies.propTypes = {
allMovies: PropTypes.array.isRequired
  }