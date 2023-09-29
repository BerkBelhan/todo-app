import React, {useState} from 'react'
//useState is a hook that lets you add state to functional components in React.
export const TodoForm = ({addTodo}) => {
    const[value,setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        // to check if the value(task,todo) is logged to the console.
        //console.log(value)
        addTodo(value)

        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value=
        {value} placeholder='What is the task for today?'
        onChange={(e)=> setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>

  )
}
