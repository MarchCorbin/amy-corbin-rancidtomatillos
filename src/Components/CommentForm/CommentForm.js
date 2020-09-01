import React, { Component } from 'react'
import { postComment } from '../../Api'
import PropTypes from 'prop-types'
import './CommentForm.scss'

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: '',
      comment: '',
      movieId: this.props.movieId,
      isValid: false
    }
  }

  changeHandler = (event) => {
    const inputName = event.target.name;
    this.setState({[inputName]: event.target.value})
    if (event.target.value.length >= 1) {
      this.setState({isValid: true})
    } else if(event.target.value === 0) {
      this.setState({isValid: false})
    }
  }

  submitComment = (e) => {
    e.preventDefault();
      if (this.state.isValid === true) {
    const movieId = this.props.movieId;
    const authorInput = this.state.author
    const commentInput = this.state.comment
    postComment(movieId, authorInput, commentInput)
    this.props.addComment(commentInput, authorInput)
    this.clearInputs()
     }
  }

  clearInputs = () => {
    this.setState({author: '', comment: '', isValid: false})
  }

  render() {
    return (
      <section className="comments-container" id="comments-form">
        <h2>Comments</h2>
        <input className="author-comment" type="text" name="author"  aria-label="author-comment" placeholder="name" onChange={this.changeHandler} value={this.state.author}></input>
        <input type="text" name="comment" className="new-comment" aria-label="new-comment" placeholder="comment" onChange={this.changeHandler} value={this.state.comment}></input>
        <button className="comment-button" onClick={this.submitComment}>New Comment</button>
      </section>
    )
  }
}

export default CommentForm

CommentForm.propTypes = {
  movieId: PropTypes.number.isRequired,
  addComment: PropTypes.func.isRequired
}