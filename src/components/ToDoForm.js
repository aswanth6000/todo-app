import React from 'react'

export const ToDoForm = ({toDoState, toDosState}) => {
 const [toDo, setToDo] = toDoState;
 const [toDos, setToDos] = toDosState;
 const handleClick = () =>{
  if(toDo.trim() !== ''){
    setToDos([...toDos, {id :Date.now(), text : toDo, status : false, isEditing : false}])
    setToDo('');
  }
 }
 console.log(toDos);
  return (
    <div className='TodoForm'>
      <input type='text' value={toDo} onChange={(e)=>setToDo(e.target.value)} className='todo-input' maxLength="62" placeholder='What is the task today?'/>
      <button className='todo-btn' type='button' onClick={handleClick}>Add task</button>
    </div>
  )
}
