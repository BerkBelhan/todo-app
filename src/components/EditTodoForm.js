import React, {useState} from 'react'
//useState is a hook that lets you add state to functional components in React.
export const EditTodoForm = ({editTodo, task}) => {
    const[value,setValue] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();
        // to check if the value(task,todo) is logged to the console.
        //console.log(value)
        editTodo(value, task.id)

        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value=
        {value} placeholder='Update your task'
        onChange={(e)=> setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update</button>
    </form>

  )
}
