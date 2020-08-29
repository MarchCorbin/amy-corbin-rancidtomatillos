import React from 'react'
import './MovieInfo.scss'
import { fetchSingleMovieDetails } from '../../Api.js'
import Header from '../Header/Header'
import PropTypes from 'prop-types'
import Rating from '../Rating/Rating'
import { deleteSingleRating, fetchUserMovieRatings } from '../../Api.js'

class MovieInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      poster_path: "",
      backdrop_path: "",
      release_date: "",
      overview: "",
      genres: [],
      budget: 0,
      revenue: 0,
      runtime: 0,
      tagline: "",
      average_rating: 0,
      currentRating: null
    };
  }

  componentDidMount = async() => {
    let movieId = this.props.match.params.id;
    this.setState({ id: movieId });
    fetchSingleMovieDetails(movieId)
    .then((data) => {
      console.log("res: ", data.movie)
      this.getAllData(data.movie)
    })
    .catch((err) => console.log(err.message));
    console.log(this.state, 'IAMSTATE')
    console.log(this.props, 'IAMPROPS')
  }

  updateRating = (nextValue) => {
    this.setState({currentRating: nextValue});
  }


  getAllData(data) {
    console.log(data, 'IAMDATA')
    this.setState({
      title: data.title,
      poster_path: data.poster_path,
      backdrop_path: data.backdrop_path,
      release_date: data.release_date,
      overview: data.overview,
      genres: data.genres,
      budget: data.budget,
      revenue: data.revenue,
      runtime: data.runtime,
      tagline: data.tagline,
      average_rating: data.average_rating,
      currentRating: this.getCurrentUserRating()
    });
  }

  getCurrentUserRating = () => {
     let currentMovie =  this.props.userRatings.find(rating => {
      return (this.state.id == rating.movie_id)
    })
    return currentMovie ? Number(currentMovie.rating) : null
  }


  deleteRating = async() => {
   let currentMovie =  this.props.userRatings.find(rating => {
      return (this.state.id == rating.movie_id)})
   const userId = this.props.userId
   const reviewId = currentMovie.id
   deleteSingleRating(userId, reviewId)
   await fetchUserMovieRatings(userId)
   await this.getCurrentUserRating()
   this.setState({currentRating: null})
  }

  render() {
    return (
      <main>
        <Header changingMessage={this.props.changingMessage} toggleButton={this.props.toggleButton} />
        <section
          className="back-drop"
          style={{ backgroundImage: `url(${this.state.backdrop_path})` }}
        >
          <div className="title-container">
            <h1 data-test-id="movie-title" className="title descrip-text">{this.state.title}</h1>
            <h2 className="descrip-text small">{this.state.tagline}</h2>
             {this.props.userId === 0  && <h2 className="descrip-text small">Login to Rate!</h2> }
            {
              this.props.userId !== 0 && this.state.currentRating == null && <Rating updateRating={this.updateRating} userRating={this.state.currentRating} getUserMovieRatings={this.props.getUserMovieRatings} movieId={this.state.id} userId={this.props.userId}/> 
            }
            {this.props.userId !== 0 && this.state.currentRating !== null && <button onClick={this.deleteRating}>Delete your Rating</button>}
          <h4 className="descrip-text small">Your Rating: {this.state.currentRating == null ? 'Not Yet Rated' : this.state.currentRating}</h4>
            <p className="descrip-text small">
             
              Average Rating: {this.state.average_rating.toFixed(1)}
            </p>
          </div>
          <div className="misc-details">
            <p className="descrip-text small">Summary: {this.state.overview}</p>
            <h2 className="release descrip-text">
              Release Date: {this.state.release_date}
            </h2>
            <p className="descrip-text small">Budget: {this.state.budget}</p>
            <p className="descrip-text small">
              Genres: {this.state.genres.map((gen) => gen)}
            </p>
            <p className="descrip-text small">Runtime: {this.state.runtime}</p>
          </div>
        </section>
      </main>
    );
  }
}

export default MovieInfo

MovieInfo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  backdrop_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  budget: PropTypes.number.isRequired,
  revenue: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  tagline: PropTypes.string.isRequired,
  average_rating: PropTypes.number.isRequired
}