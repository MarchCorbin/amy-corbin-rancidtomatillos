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
// perhaps have a islogged in attribute to conditionally render on the componentdidmount
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

  componentDidUpdate = (prevProps) => {
    if(prevProps !== this.props) {
      this.setState({userRatings: this.props.userRatings})
    }
  }

  displayAllMovies() {
    if (this.state.allMovies.length && !this.props.userRatings.length) {
      return this.state.allMovies.map(movie => {
        return <Card
          movieTitle={movie.title}
          movieId={movie.id}
          moviePoster={movie.poster_path}
          movieRating={movie.average_rating}
          releaseDate={movie.release_date}
          backdrop={movie.backdrop_path}
          userRating='Not yet rated'
        />
      })
    } else {
      return this.state.allMovies.map(movie => {
       let userRating = this.props.userRatings.find(rating => rating.movie_id === movie.id)
       if (userRating === undefined) {userRating = 'Nothing here yet'}
        return <Card
          movieTitle={movie.title}
          movieId={movie.id}
          moviePoster={movie.poster_path}
          movieRating={movie.average_rating}
          releaseDate={movie.release_date}
          backdrop={movie.backdrop_path}
          userRating={userRating.rating}
        />
      })
    }
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