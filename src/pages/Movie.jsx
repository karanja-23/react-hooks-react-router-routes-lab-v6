import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";


function Movie() {
  const [movie, setMovies] = useState(null)
  const params = useParams()
  
  const id = params.id
  useEffect(() => {
    const url = `http://localhost:4000/movies/${id}`;
    console.log(`Fetching movie from: ${url}`);
    fetch(`http://localhost:4000/movies/${id}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      } else {
        return res.json();
      }
    })
    .then(data => {
      setMovies(data)
      console.log(data)
    })
    
  }, [])
if (!movie){
  return(
    <p>Loading ...</p>
  )
}

  const movieGenres= movie.genres

  return (
    <>
      <header>
      <NavBar />
      <h1>Movie details</h1>
        {/* What component should go here? */}
      </header>     
        {/* Movie info here! */}     
      
          <h1>{movie.title}</h1>
          <p>Run time:  {movie.time} minutes</p>
         
          {movie ? movieGenres.map((genre, index) => {
            return(
              <span key={index}>{genre}</span>
            )
          }): null}

      
    </>
  );
};

export default Movie;
