import React, {useEffect, useState} from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import Search from "./Search";

function MovieContainer() {
  const [movies, setMovies] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/movies")
    .then(r => r.json())
    .then(movies => setMovies(movies))
  }, [])

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value)
  }

  const moviesToDisplay = movies.filter((movie) => selectedCategory === "All" || movie.genre === selectedCategory)
  .filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));

   return (
    <div>
      <h1>Watchlist</h1>
      <Search 
      search={search}
      onSearchChange={setSearch}
      /><br/>
      <Filter 
      onCategoryChange={handleCategoryChange}
      />
      <ul>
        {moviesToDisplay.map((movie) => (
          <MovieCard 
          key={movie.id}
          genre={movie.genre}
          movie={movie}
          />
        ))}
      </ul>
    </div>
  );
}

export default MovieContainer;
