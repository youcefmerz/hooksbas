import React, { useState , useEffect, useRef } from "react"



const App11 = () => {
const [todos , setTodos] = useState({id:1, text:"learn hooks"})
let nameRef = useRef();

const handleClick=()=>{setTodos({text:nameRef.current.value})}
  return (
    <div className="App11"> 
        <input className="todo" ref={nameRef} type="text"/>
        <button type="button" onClick={handleClick} > click me to change text</button>
      <div>
       
        <p>{todos.text} </p>
      </div>
     
      </div>
  )

  }
  


export default App11;
