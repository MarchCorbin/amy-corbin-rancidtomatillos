
// import React from 'react'
import React, { Component } from 'react'
import { postComment } from '../../Api'

// import Comments from '../Comments/Comments.js'
// import PropTypes from 'prop-types'
import './CommentForm.scss'


class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: '',
      comment: '',
      movieId: this.props.movieId
    }
  }

  changeHandler = (event) => {
    const inputName = event.target.name;
    this.setState({[inputName]: event.target.value})
  }

  submitComment = (e) => {
    e.preventDefault();
    const movieId = this.props.movieId;
    const authorInput = this.state.author
    const commentInput = this.state.comment
    postComment(movieId, authorInput, commentInput)
    this.props.addComment(commentInput, authorInput)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({author: '', comment: ''})
  }

  render() {
    return (
      <section className="comments-container">
        <h2>Comments section</h2>
        <input className="author-comment" type="text" name="author"  aria-label="author-comment" placeholder="name" onChange={this.changeHandler}value={this.state.author}/>
        <input type="text" name="comment" className="new-comment" aria-label="new-comment" placeholder="comment" onChange={this.changeHandler}value={this.state.comment}/>
        <button className="comment-button" onClick={this.submitComment}>New Comment</button>
      </section>
    )
  }
}

export default CommentForm