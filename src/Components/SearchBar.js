import React from "react"
import {  FormGroup,  Input } from 'reactstrap';


const SearchBar = ({handleSearch}) => {

  return (
    <div className="SearchBar"> 
        <FormGroup>
        <Input onChange={handleSearch}  style={{width:"750px",padding:"10px",margin:"10px"}} type="text" name="movie" id="exemplemovie" placeholder="Search a movie" />
      </FormGroup>
     
      </div>
  )

  }
  


export default SearchBar;
