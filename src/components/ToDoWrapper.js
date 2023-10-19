import React from 'react'
import { ToDo } from './ToDo'
import { ToDoForm } from './ToDoForm'
import {EditToDoForm} from './EditToDoForm'
export const ToDoWrapper = () => {
  return (
    <div className='ToDoWrapper'>
      <h1>Get Things Done!</h1>
      <ToDoForm/>
      <EditToDoForm/>
      <ToDo/>
    </div>
  )
}
