import React from 'react'
import { BiArrowToBottom , BiTrash } from "react-icons/bi";


function FirstItem() {
  return (
    <div id='first'>
      <div style={{border: '2px solid red' , marginBottom:5}}>
        <form action="">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> First Item <BiArrowToBottom style={{marginLeft:220}}/><BiTrash /></label>
        </form>
      </div>
      <div style={{border: '2px solid red' , marginBottom:5}}>
        <form action="">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> First Item <BiArrowToBottom style={{marginLeft:220}}/><BiTrash /></label>
        </form>
      </div>
      <div style={{border: '2px solid red' , marginBottom:5}}>
        <form action="">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> First Item <BiArrowToBottom style={{marginLeft:220}}/><BiTrash /></label>
        </form>
      </div>
      <div style={{border: '2px solid red' , marginBottom:5}}>
        <form action="">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> First Item <BiArrowToBottom style={{marginLeft:220}}/><BiTrash /></label>
        </form>
      </div>
        
        
    </div>
  )
}

export default FirstItem