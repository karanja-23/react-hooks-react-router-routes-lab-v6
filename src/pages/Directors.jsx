import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
function Directors() {
  const[directors, setDirectors]= useState(null)
  useEffect(()=>{
    fetch('http://localhost:4000/directors',{
      method: 'GET'
    })
    .then(response=> response.json())
    .then(data => setDirectors(data))
  },[]);
  return (
    <>
      <header>
      <NavBar />
        <h1>Directors Page</h1>
        
        {/* What component should go here? */}
      </header>
      <main>
        {/* Director info here! */}
        {directors ? directors.map((director,index)=>{
          return(
            
            <article key={index}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => {
                return(
                  <li key={index}>{movie}</li>
                )
              })}
            </ul>

            </article>            
            
          )
        }) : null}
      </main>
    </>
  );
};

export default Directors;
