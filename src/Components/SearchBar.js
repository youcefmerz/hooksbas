import React  from "react"
import {  FormGroup,  Input } from 'reactstrap';
import Rate from './Rate'

const SearchBar = ({handleSearch, ratingSearch , setRatingSearch}) => {

  return (
    <div className="SearchBar" style={{display:'flex'}}> 
    <div>
        <FormGroup>
        <Input onChange={handleSearch}  style={{width:'750px',padding:'10px',margin:'10px'}} type="text" name="movie" id="exemplemovie" placeholder="Search a movie" />
      </FormGroup>
     </div>
     <div style={{padding:"15px"}}>
       <Rate rating={ratingSearch} starIndex={setRatingSearch}/>
     </div>
      </div>
  )

  }
  


export default SearchBar;
