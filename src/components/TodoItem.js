import React from 'react'
import { BiArrowToBottom , BiTrash } from "react-icons/bi";

function TodoItem() {
  return (
    <div >
      <div className="todo-item-container">
        <form action="" className="todo-item-form">
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> First Item</label>
          </div>
          <div>
            <BiArrowToBottom /><BiTrash />
          </div>
        </form>
      </div>
      <div className="todo-item-container">
        <form action="" className="todo-item-form">
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Second Item</label>
          </div>
          <div>
            <BiArrowToBottom /><BiTrash />
          </div>
        </form>
      </div>
      <div className="todo-item-container">
        <form action="" className="todo-item-form">
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Third Item</label>
          </div>
          <div>
            <BiArrowToBottom /><BiTrash />
          </div>
        </form>
      </div>
      <div className="todo-item-container">
        <form action="" className="todo-item-form">
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Another Item</label>
          </div>
          <div>
            <BiArrowToBottom /><BiTrash />
          </div>
        </form>
      </div>
        
    </div>
  )
}

export default TodoItem