import React from 'react'

export const ToDoForm = () => {
  return (
    <form className='TodoForm'>
      <input type='text' className='todo-input' maxLength="62" placeholder='What is the task today?'/>
      <button className='todo-btn' type='submit'>Add task</button>
    </form>
  )
}
