import React from 'react'
import { ToDo } from './ToDo'
import { ToDoForm } from './ToDoForm'
import { useState } from 'react'
export const ToDoWrapper = () => {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState([''])
  return (
    
    <div className='ToDoWrapper'>
      <h1>Get Things Done!</h1>
      <ToDoForm toDosState = {[toDos, setToDos]} toDoState = {[toDo, setToDo]}/>
      <ToDo toDoState = {[toDos, setToDos]}/>
    </div>
  )
}
