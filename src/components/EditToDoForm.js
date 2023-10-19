import React from 'react'

export const EditToDoForm = () => {
  return (
    <form className='TodoForm'>
    <input type="text" className="todo-input" maxLength="62" />
    <button className='todo-btn' type='submit'>Add task</button>
  </form>
  )
}
