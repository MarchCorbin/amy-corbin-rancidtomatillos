
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

  
}

export default CommentForm