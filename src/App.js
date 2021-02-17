import React, { useState , useEffect, useRef } from "react"
import MovieCard from "./Components/MovieCard";
import MoviesList from "./Components/MoviesList";
import SearchBar from "./Components/SearchBar";




const App = () => {
  const moviesList = [
    {
      title: `The godfather`,
      url: `https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg`,
      desc: `The aging patriarch of an organized crime 
             dynasty transfers control of his clandestine 
             empire to his reluctant son.`,
      rate: 5,
    },
    {
      title: `Fight club`,
      url: `https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg`,
      desc: `An insomniac office worker and 
             a devil-may-care soapmaker form an underground
              fight club that evolves into something.`,
      rate: 5,
    },
    {
      title: `The illusinist`,
      url: `https://m.media-amazon.com/images/M/MV5BY2VkMzZlZDAtNTkzNS00MDIzLWFmOTctMWQwZjQ1OWJiYzQ1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_SX700_AL_.jpg`,
      desc: `In turn-of-the-century Vienna, 
             a magician uses his abilities to secure the 
             love of a woman far above his social standing.`,
      rate: 4,
    },
    {
      title: `American History X`,
      url: `https://m.media-amazon.com/images/M/MV5BZjA0MTM4MTQtNzY5MC00NzY3LWI1ZTgtYzcxMjkyMzU4MDZiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg`,
      desc: `A former neo-nazi skinhead
              tries to prevent his younger brother 
              from going down the same wrong path that he did.`,
      rate: 5,
    },
    {
      title: `The godfather`,
      url: `https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg`,
      desc: `The aging patriarch of an organized crime 
             dynasty transfers control of his clandestine 
             empire to his reluctant son.`,
      rate: 5,
    },
    {
      title: `Fight club`,
      url: `https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg`,
      desc: `An insomniac office worker and 
             a devil-may-care soapmaker form an underground
              fight club that evolves into something.`,
      rate: 5,
    },
    {
      title: `The illusinist`,
      url: `https://m.media-amazon.com/images/M/MV5BY2VkMzZlZDAtNTkzNS00MDIzLWFmOTctMWQwZjQ1OWJiYzQ1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_SX700_AL_.jpg`,
      desc: `In turn-of-the-century Vienna, 
             a magician uses his abilities to secure the 
             love of a woman far above his social standing.`,
      rate: 4,
    },
    {
      title: `American History X`,
      url: `https://m.media-amazon.com/images/M/MV5BZjA0MTM4MTQtNzY5MC00NzY3LWI1ZTgtYzcxMjkyMzU4MDZiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg`,
      desc: `A former neo-nazi skinhead
              tries to prevent his younger brother 
              from going down the same wrong path that he did.`,
      rate: 5,
    },
    {
      title: `The godfather`,
      url: `https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg`,
      desc: `The aging patriarch of an organized crime 
             dynasty transfers control of his clandestine 
             empire to his reluctant son.`,
      rate: 5,
    },
    {
      title: `Fight club`,
      url: `https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg`,
      desc: `An insomniac office worker and 
             a devil-may-care soapmaker form an underground
              fight club that evolves into something.`,
      rate: 5,
    },
    {
      title: `The illusinist`,
      url: `https://m.media-amazon.com/images/M/MV5BY2VkMzZlZDAtNTkzNS00MDIzLWFmOTctMWQwZjQ1OWJiYzQ1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_SX700_AL_.jpg`,
      desc: `In turn-of-the-century Vienna, 
             a magician uses his abilities to secure the 
             love of a woman far above his social standing.`,
      rate: 4,
    },
    {
      title: `American History X`,
      url: `https://m.media-amazon.com/images/M/MV5BZjA0MTM4MTQtNzY5MC00NzY3LWI1ZTgtYzcxMjkyMzU4MDZiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg`,
      desc: `A former neo-nazi skinhead
              tries to prevent his younger brother 
              from going down the same wrong path that he did.`,
      rate: 5,
    },
    {
      title: `The godfather`,
      url: `https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg`,
      desc: `The aging patriarch of an organized crime 
             dynasty transfers control of his clandestine 
             empire to his reluctant son.`,
      rate: 5,
    },
   
    {
      title: `American History X`,
      url: `https://m.media-amazon.com/images/M/MV5BZjA0MTM4MTQtNzY5MC00NzY3LWI1ZTgtYzcxMjkyMzU4MDZiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg`,
      desc: `A former neo-nazi skinhead
              tries to prevent his younger brother 
              from going down the same wrong path that he did.`,
      rate: 5,
    },
  ];

const [searchWord , setSearchWord] = useState('')
const handleSearch = (a) => {
  setSearchWord(a.target.value) 
  console.log(a.target.value)}

  
  return (
    <div className="App"> 
    <SearchBar handleSearch={handleSearch}/>
     <MoviesList movieslist={searchWord ? moviesList.filter((elm) => elm.title.includes(searchWord))
     : moviesList} />
     <button onClick={<SearchBar handleSearch={handleSearch}/>}>add</button>
      </div>
  )

  }
  


export default App;
