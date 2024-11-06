import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState(null)
  useEffect (()=>{
    fetch('http://localhost:4000/actors',{
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => setActors(data))

  },[])
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
        <h1>Actors Page</h1>
      </header>
      <main>
        {/* Actor info here! */}
        {actors ? actors.map((actor,index)=>{
            return(
              <article key={index}>
                <h2>{actor.name}</h2>
                <ul>
                {actor.movies.map((movie,index)=>{
                  return(
                    <li key={index}>{movie}</li>
                  )
                })}              
                </ul>
              </article>
            )
        }) : 'Loading ...'}
      </main>
    </>
  );
};

export default Actors;
