import React, { useState , useEffect, useRef } from "react"
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';


const MovieCard = ({movie}) => {

  return (
    <div className="App"style={{width:"330px",padding:"10px",margin:"3px",borderStyle:"groove"}}> 
        <Card>
        <CardBody>
            <div><CardTitle tag="h5"> {movie.title}</CardTitle></div>
          
        </CardBody>
        <div><img width="100%" height="300px" src={movie.url} alt="Card image cap" /></div>
        
        <CardBody>
            <div><CardText>{movie.desc}</CardText></div>
          
         
        </CardBody>
      </Card>
      </div>
  )

  }
  


export default MovieCard;

