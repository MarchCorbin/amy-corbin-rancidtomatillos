import React from 'react'
import './MovieInfo.scss'
import { fetchSingleMovieDetails } from '../../Api.js'
import Header from '../Header/Header'
import PropTypes from 'prop-types'

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
    };
  }

  componentDidMount() {
    let movieId = this.props.match.params.id;
    this.setState({ id: movieId });
    fetchSingleMovieDetails(movieId)
      .then((data) => this.getAllData(data.movie))
      .catch((err) => alert(err.message));
  }

  getAllData(data) {
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
    });
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
            <h1 className="title descrip-text">{this.state.title}</h1>
            <h2 className="descrip-text small">{this.state.tagline}</h2>
            <p className="descrip-text small">
              Average Rating: {this.state.average_rating}
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