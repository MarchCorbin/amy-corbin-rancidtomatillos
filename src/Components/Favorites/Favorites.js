import React from 'react'
import './Favorites.scss'
import { getUserFavorites, fetchAllMovies } from '../../Api.js'
import Card from '../Card/Card'
import PropTypes from 'prop-types'


class Favorites extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      favIds: [],
      favorites: []
    }
  }

  componentDidMount = () => {
    getUserFavorites()
    .then(data => this.setState({favIds: data}))
    fetchAllMovies()
    .then(data => this.setState({favorites:data.movies.filter(movie => this.state.favIds.includes(movie.id))}))
    .catch(error => alert(error.message))
  }

  displayFavorites = () => {
  return this.state.favorites.length >= 1 &&
     this.state.favorites.map(movie => {
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




  render() {
    return <section className="fav-display">
      {this.displayFavorites()}
    </section>
  }

}

export default Favorites

Favorites.propTypes = {
  userRatings: PropTypes.array
}