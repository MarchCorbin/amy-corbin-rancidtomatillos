import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import './Rating.scss'
import { postUserRating } from '../../Api'
 
class Rating extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      rating: 0
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    let id = this.props.movieId
    let userId = this.props.userId
    this.setState({rating: nextValue});
    postUserRating(userId, id, nextValue)
    this.props.getUserMovieRatings()
  }
 
  render() {
    const { rating } = this.state;
    
    return (                
      <div className="star-container">
        <h2>User Rating: {rating}</h2>
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