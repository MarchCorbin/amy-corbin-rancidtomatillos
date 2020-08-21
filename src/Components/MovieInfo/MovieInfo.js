import React from 'react'
import './MovieInfo.scss'
import { fetchSingleMovieDetails } from '../../Api.js'


class MovieInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id:''
    }
  }

  componentDidMount() {
 let  movieId = this.props.match.params.id
 this.setState({id: movieId})
 fetchSingleMovieDetails(movieId)
 .then(data => console.log(data.movie))
 .catch(err => console.log(err))
  }

  render() {
  return <h1>MOVIEDETAILS {this.state.id}</h1>
  } 
}

export default MovieInfo