import React from 'react'
import InputTodo from './InputTodo'
import TodosList from './TodosList'

function TodosLogic() {
  return (
    <div className='todo-logic'>

        <InputTodo />
        <TodosList />

    </div>
  )
}

export default TodosLogic

