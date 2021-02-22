import React, { useState , useEffect, useRef } from "react"
import MoviesList from "./Components/MoviesList";
import SearchBar from "./Components/SearchBar";
import AddMovie from "./Components/AddMovie";
import {moviesList} from './assets/MookData'
import 'bootstrap/dist/css/bootstrap.min.css';






const App = () => {
  const [movieList, setMovieList] = useState(moviesList)

const [searchWord , setSearchWord] = useState('')
const handleSearch = (a) => {
  setSearchWord(a.target.value) }

  const [ratingSearch, setRatingSearch] = useState(0) 
  const Addmovie = (newMovie)=> {
    setMovieList([...movieList, newMovie])
      }
    
  
  return (
    <div className="App"> 
    <SearchBar handleSearch={handleSearch} ratingSearch={ratingSearch} setRatingSearch= {setRatingSearch}/>
     <MoviesList moviesArray={searchWord ? movieList.filter((elm) => elm.title.includes(searchWord))
     :
     ratingSearch > 1
     ? movieList.filter((movie)=> movie.rate >= ratingSearch)
     : movieList} />
     <AddMovie handleAdd={Addmovie}/>
   
      </div>
  )

  }
  


export default App;
