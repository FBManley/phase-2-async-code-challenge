import React from 'react'

function Search({search, onSearchChange}) {
  function handleSearchChange(e){
    onSearchChange(e.target.value)
  }
  return (
    <div>
        <input 
        id="search"
        type="text" 
        placeholder="Search for movie by title" 
        style={{width: '250px'}}
        value={search}
        onChange={handleSearchChange}
        />
    </div>
  )
}

export default Search;
