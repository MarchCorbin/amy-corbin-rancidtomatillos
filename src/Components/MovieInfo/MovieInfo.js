import React from 'react'
import './MovieInfo.scss'
import { fetchSingleMovieDetails } from '../../Api.js'
import Header from '../Header/Header'

class MovieInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id:'',
      title: '',
      poster_path: "",
      backdrop_path: "",
      release_date: "",
      overview: "",
      genres: [],
      budget: 0,
      revenue: 0,
      runtime: 0,
      tagline: "",
      average_rating: 0
    }
  }

  componentDidMount() {
 let  movieId = this.props.match.params.id
 this.setState({id: movieId})
 fetchSingleMovieDetails(movieId)
 .then(data => this.getAllData(data.movie))
 .catch(err => console.log(err))
  }

  getAllData(data) {
    this.setState(
      {title: data.title, poster_path: data.poster_path, backdrop_path: data.backdrop_path, release_date: data.release_date, overview: data.overview, genres: data.genres, budget: data.budget, revenue: data.revenue, runtime: data.runtime, tagline: data.tagline, average_rating: data.average_rating}
    )
  }

  render() {
    return (
      <main>
        <Header />
        <section className="indv-movie">
          <h1 className="title" data-testid="movie-title">{this.state.title}</h1>
          <h2 className="release">{this.state.release_date}</h2>
        <section className="back-drop">
          <img className="back-img" src={this.state.backdrop_path} alt={this.state.title}></img>
          </section>
          </section>
        <section className="movie-info">
          <p>{this.state.overview}</p>
          <p>{this.state.budget}</p>
          <p>{this.state.genres.map(gen => gen)}</p>
          <p>{this.state.runtime}</p>
          <p>{this.state.average_rating}</p>
          <p>{this.state.tagline}</p>
        </section>
      </main>
    )
  } 
}

export default MovieInfo

