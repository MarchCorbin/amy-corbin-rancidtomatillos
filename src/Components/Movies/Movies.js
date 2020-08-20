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

  render() {
    return (
      <section class="movies-container">
        <Card allMovies= {this.state.allMovies}/>
      </section>
    ) 
  }
}

  export default Movies;