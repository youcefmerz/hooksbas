import React, { useState  } from "react"
import MovieCard from "./MovieCard";



const MoviesList = ({movieslist}) => {

  return (
    <div className="MoviesLis" style={{display:"flex",flexWrap:"wrap"}} > 
      
      {movieslist.map(elm => <MovieCard movie={elm}/> )}  
       
         
      </div>
  )

  }
  


export default MoviesList;
