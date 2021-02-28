import React, { useState  } from "react"
import PropTypes from "prop-types";
import {Card , CardImg} from 'reactstrap'
import imgg from '../plus-circle-solid.svg'
import ModalComp from "./ModalComp";

const AddMovie = ({handleAdd}) => {
    const [show , setShow] = useState(false)
    const toggleShow = () => setShow(!show)

    return (
      <div className="App"> 
    <Card>
        <CardImg 
        onClick={()=> setShow(true)}
         width='100%'
         style={{ height: '200px'}}
         src={imgg}
         alt="cdddd"
         /> 
    </Card>
    {show &&
     <ModalComp isOpen={show} toggle={toggleShow} handleAdd={handleAdd} />}
      </div>
    )
  
    }
    AddMovie.prototypes = { 
        handleAdd : PropTypes.func.isRequired,
       
    
    }
  
  
  export default AddMovie;
  
  

