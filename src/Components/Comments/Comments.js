import React, { Component } from 'react'
import './Comments.scss'
import PropTypes from 'prop-types'

function Comments({comments}) {
  return (
    <section className="comments-section" alt="comment-away">
        {comments.length > 0 ?
         comments.map((words, i) => {
           return <h2 key={`comment-${i}`}>{words.author}: {words.comment}</h2>
         }) : <h2>Comments here</h2>
        }
      </section>
    )
}

export default Comments

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
}