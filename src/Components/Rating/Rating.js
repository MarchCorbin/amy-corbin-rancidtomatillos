import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import './Rating.scss'
import { postUserRating } from '../../Api'
import PropTypes from 'prop-types'

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      hasRated: false
    };
  }

  onStarClick = async(nextValue, prevValue, name) => {
      let id = this.props.movieId
      let userId = this.props.userId
      this.setState({rating: nextValue});
      await postUserRating(userId, id, nextValue)
      this.props.updateRating(nextValue)
      this.props.getUserMovieRatings()
  }

  render() {
    const { rating } = this.state;
    return (                
      <div className="star-container">
        <h2 className='descrip-text rating-text'>Rate This Movie!</h2>
        <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}

export default Rating;

Rating.propTypes = {
  updateRating: PropTypes.func.isRequired,
  getUserMovieRatings: PropTypes.func.isRequired,
  movieId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired
}