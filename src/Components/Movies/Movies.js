import React, { Component } from 'react'
import { fetchAllMovies } from '../../Api'
import Card from '../Card/Card'
import './Movies.scss'
import PropTypes from 'prop-types'

class Movies extends Component {
  constructor(props) {
    super(props)
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

    return this.state.allMovies.map(movie => {
      let userRating = this.props.userRatings.find(rating => rating.movie_id === movie.id)
        return <Card
          movieTitle={movie.title}
          key={movie.id}
          movieId={movie.id}
          moviePoster={movie.poster_path}
          movieRating={movie.average_rating.toFixed(1)}
          releaseDate={movie.release_date}
          backdrop={movie.backdrop_path}
          userRating={userRating ? userRating.rating : ''}
        />
      })
    }
  

  

  render = () => {
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