import React from "react";
import { useState } from 'react'
import Comments from './Comments'

function MovieCard({movie}) {
  const [comments, setComments] = useState([])
  const {title, description, genre, watched} = movie

  return (
    <div>
      <h3>{title}</h3>
      <p>{genre}</p>
      <p>
        <strong>{description}</strong>
      </p>
      <button>Mark as watched{watched}</button>
      <Comments comments={comments} setComments={setComments}/>
    </div>
  );
}

export default MovieCard;
