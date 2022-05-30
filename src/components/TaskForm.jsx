import React, { useState, useContext } from 'react'
import { GlobalContext } from "../context/GlobalContext"
import {useNavigate} from 'react-router-dom'

export const TaskForm = () => {

  let navigate =useNavigate();

  const{ addTask } = useContext(GlobalContext);

  const[ task, setTask] = useState({
    title: "",
    description: "",
  })
  const handleChange = (e)=>{
    setTask({...task, [e.target.name]: e.target.value});
  }

  const handleSumit = (e)=>{
    e.preventDefault();
    /* console.log(task, 'submit') */
    addTask(task);
    navigate("/", { replace: true })
  }

  return (
    <div className=' form'>
      <h2>A task</h2>
      <form className='form-c' onSubmit={handleSumit}>
        <input 
          type="text"
          name='title'
          placeholder='Write Title'
          onChange={handleChange}
          autoComplete='off'
          className='input' />
        <textarea 
          cols="20"
          rows="5"
          placeholder='Writer description'
          name='description'
          onChange={handleChange}
          autoComplete='off'
          className='input'/>
        <button className='button'>Create Task</button>
      </form>
    </div>
  )
}
