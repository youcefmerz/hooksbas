import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,InputGroup,Input,Label  } from 'reactstrap';
import PropTypes from 'prop-types'
const ModalComp = ({isOpen,toggle,handleAdd}) => {
 
  const [newMovie, setNewMovie] = useState({
      title:'',
      url:'',
      desc:'',
      rate:''
  });
  const onChangeHandler = (e)=>setNewMovie({...newMovie,[e.target.name] : e.target.value})
const handleClick = (e) =>  {
    e.preventDefault()
        handleAdd(newMovie)
}

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add movie</ModalHeader>
        <ModalBody>
        <InputGroup>
       <Label>
           Title:
       </Label>
        <Input type='text' name="title" placeholder="titre" onChange={onChangeHandler} />
      </InputGroup>
      <InputGroup>
       <Label>
           Url:
       </Label>
        <Input type='text' name="url" placeholder="url" onChange={onChangeHandler} />
      </InputGroup>
      <InputGroup>
       <Label>
           Description:
       </Label>
        <Input type='textarea' name="desc" placeholder="description" onChange={onChangeHandler} />
      </InputGroup>
      <InputGroup>
       <Label>
           Rate:
       </Label>
        <Input type='text' name="rate" placeholder="rate" onChange={onChangeHandler} />
      </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={(e)=>{
              handleClick(e)
              toggle()
          }}>Add</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </div>
  );
}

Modal.propTypes = { 
  isOpen : PropTypes.bool.isRequired,
  toggle : PropTypes.func.isRequired,
  handleAdd : PropTypes.func.isRequired,

}



export default ModalComp;