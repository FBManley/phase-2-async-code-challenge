import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Welcome to Watchlist!</h1>
        <Link to="/movies">Movies</Link>
        <br></br>
        <Link to="/movies/new">Add New Movie</Link>
    </div>
    
  )
}
