import React, {useState} from "react";

function MovieForm() {

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [watched, setWatched] = useState(false)
  const [genre, setGenre] = useState("")


  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:3001/movies", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        image: image,
        description: description, 
        watched: watched,
        genre: genre,
      })
    })
  }

  return (
    <form className="new-movie-form" onSubmit={handleSubmit}>
        <h3>Add Movie</h3>
      <input placeholder="Title" name="title" onChange={(e) => setTitle(e.target.value)}/>
      <br/>
      <select name="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="" >Select Genre:</option>
      <option>Action</option>
      <option>Horror</option>
      <option>Drama</option>
      <option>Comedy</option>
      </select><br/>
      <label>Watched?
      <input type="checkbox" name="watched" checked={watched} onChange={(e) => setWatched(e.target.checked)}/>
      </label><br/>
      <input placeholder="Image" name="image" onChange={(e) => setImage(e.target.value)}/><br/>
      <textarea placeholder="Description" rows={10} name="description" onChange={(e) => setDescription(e.target.value)}/><br/>
      <input type="submit" value="Add Movie" />
    </form>
  );
}

export default MovieForm;
