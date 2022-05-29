import React from 'react'

export const TaskForm = () => {
  return (
    <div className=' form'>
      <h2>A task</h2>
      <form className='form-c'>
        <input type="text" placeholder='Write Title' className='input' />
        <textarea cols="20" rows="5" placeholder='Writer description' className='input'/>
        <button className='button'>Create Task</button>
      </form>
    </div>
  )
}
