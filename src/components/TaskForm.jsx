import React, { useState } from 'react'

export const TaskForm = () => {

  const[ task, setTask] = useState({
    title: "",
    description: "",
  })
  const handleChange = (e)=>{
    setTask({...task, [e.target.name]: e.target.value});
  }

  return (
    <div className=' form'>
      <h2>A task</h2>
      <form className='form-c'>
        <input 
          type="text"
          name='title'
          placeholder='Write Title'
          onChange={handleChange}
          className='input' />
        <textarea 
          cols="20"
          rows="5"
          placeholder='Writer description'
          name='description'
          onChange={handleChange}
          className='input'/>
        <button className='button'>Create Task</button>
      </form>
    </div>
  )
}
