import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


export const ToDo = ({toDoState}) => {
  const [toDos, setToDos] = toDoState;
  const deleteTodo = (id) =>{
    setToDos( toDos.filter((todo)=> todo.id !== id))
  }
  const completeTask = (id)=>{
    setToDos( toDos.map((todo)=> todo.id === id ? {...todo, status : !todo.status} : todo))
  }
  return (
    <div>
      {toDos.map((value, index)=>(
        <div className='Todo' key={index}>
      <p className={`${value.status === true ? "completed" : "incompleted"}`}>
      {value.text}
      </p>
      <div>
        <FontAwesomeIcon className='delete-icon' icon={faTrash} onClick={()=>deleteTodo(value.id)}/>
        <FontAwesomeIcon className='delete-icon' icon={faCheck} onClick={()=>completeTask(value.id)} />
      </div>
    </div>
    ))}
    </div>
  )
}
