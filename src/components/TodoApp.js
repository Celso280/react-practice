import React from 'react'
import Header from './Header.js'
import TodosLogic from './TodosLogic'


function TodoApp() {
  return (
    <div className='todo-app'>
       <Header />
       <TodosLogic />
    </div>
  )
}

export default TodoApp


