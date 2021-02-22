import React, { useState  } from "react"
import MovieCard from "./MovieCard";



const MoviesList = ({moviesArray}) => {

  return (
    <div className="MoviesLis" style={{display:"flex",flexWrap:"wrap"}} > 
      
      {moviesArray.map(elm => <MovieCard movie={elm}/> )}  
       
         
      </div>
  )

  }
  


export default MoviesList;
