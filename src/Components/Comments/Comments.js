import React, { Component } from 'react'
import './Comments.scss'
import { fetchComments } from '../../Api.js'

function Comments({comments}) {
  return (
    <section className="Comments-section">
        {comments.length > 0 ?
         comments.map((words, i) => {
           return <h2 key={`comment-${i}`}>{words.author}: {words.comment}</h2>
         }) : <h2>Comments here</h2>
        }
      </section>
    )
}



export default Comments