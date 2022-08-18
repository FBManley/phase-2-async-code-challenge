import React from 'react'

function Filter({ onCategoryChange}) {
  // const handleFilterChange = (e) => {
  //   onSearchChange(e.target.value)
  // }
  return (
    <div>
        <select name="filter" id="genre" onChange={onCategoryChange}>
            <option value="All" >All</option>
            <option value="Action">Action</option>
            <option value="Horror">Horror</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
        </select>
    </div>
  )
}

export default Filter;
