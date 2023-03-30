import React from 'react'
import { FaPlusCircle } from "react-icons/fa";

function InputTodo() {
  return (
    <div className='input-todo-container'>
      <input className='input-todo' type={Text} placeholder='add todo ....' /><FaPlusCircle className='icon' onClick={() =>{
        alert('clicked')
      }}/>
      
    </div>
  )
}

export default InputTodo