
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
  
  }

  clearInputs = () => {
    this.setState({author: '', comment: ''})
  }

}

export default CommentForm