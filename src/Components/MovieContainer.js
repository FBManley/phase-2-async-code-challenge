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
  .filter((movie) => movie.genre.toLowerCase().includes(search.toLowerCase()));

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
          // onUpdateMovie={handleUpdateMovie}
          />
        ))}
      </ul>
      {/* {displayedCards} */}
      {/* <MovieCard /> */}
      {/* render a list of <MovieCard> components in here */} 
    </div>
  );
}

export default MovieContainer;


// const categoryToDisplay = movies.filter((movie => {
  //   if (handleCategoryChange === "All") return true;
  //   return movie.selectedCategory === handleCategoryChange
  // }))

  
  // const displayedMovies = movies.filter((movie) => 
  //   movie.genre.toLowerCase().includes(search.toLowerCase())
  // );

  // function handleChangeGenre(genre) {
  //   if (filters.genre !== "all")
  //   setFilters({genre: genre})
  // }
  // const displayedCards = movies.map((movie) => {
  //  <MovieCard key={movie.id} movie={movie}/> 
  // })
  // const filteredCards = displayedCards.filter((movie) => {
  //   return movie.genre.toLowerCase().includes(search.toLowerCase())
  // })
  // function handleChangeGenre() {
  //   setFilters(filters)
  // }
  // const cardDisplayed = movies.filter((movie => {
  //   if (handleChangeGenre === "All") return true;
  //   return movie.setFilters === handleChangeGenre
  // }))
  // function handleUpdateMovie(displayedMovies) {
  //   const displayedMovies = movies.map((movie) => {
  //     if(movie.id === displayedMovies.id) {
  //       return displayedMovies;
  //     } else { return movie}
  //   })
  // }
  // const handleChangeGenre = (genre) => {
  //   if(filters.genre !== "all")
  //   setFilters({genre: genre})
  // }

  // const handleFilteredMovies = () => {
  //   setFilteredMovie((filteredMovie => !filteredMovie))
  // }
  // if (filteredMovie) {
  //   displayedCards = displayedCards.filter((movies) => movies)
  // }
  // let filteredMovie = movies.find((movie) => movie.id === ) 