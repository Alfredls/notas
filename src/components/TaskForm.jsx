import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from "../context/GlobalContext"
import {useNavigate, useParams} from 'react-router-dom'

export const TaskForm = () => {

  let navigate =useNavigate();
  const params = useParams()

  const{ addTask, tasks, updateTask } = useContext(GlobalContext);

  const[ task, setTask] = useState({
    id: "",
    title: "",
    description: "",
  })
  const handleChange = (e)=>{
    setTask({...task, [e.target.name]: e.target.value});
  }

  const handleSumit = (e)=>{
    e.preventDefault();
    /* console.log(task, 'submit') */
    if(task.id){
      updateTask(task)
    }else{
      addTask(task);
    }
    navigate("/", { replace: true })
  }

  useEffect(() => {
    console.log(params)
    const taskFound = tasks.find(task=> task.id === params.id);

    if(taskFound){
      setTask(taskFound)
      /* console.log('editando..') */
    }else{
      console.log('creando..')
    }
  }, [params.id, tasks])
  

  return (
    <div className=' form'>
      <h2>{ task.id? "Editing" : "Create a Task"}</h2>
      <form className='form-c' onSubmit={handleSumit}>
        <input 
          type="text"
          name='title'
          placeholder='Write Title'
          onChange={handleChange}
          autoComplete='off'
          value={task.title}
          className='input' />
        <textarea 
          cols="20"
          rows="5"
          placeholder='Writer description'
          name='description'
          onChange={handleChange}
          autoComplete='off'
          value={task.description}
          className='input'/>
        <button className='button'>{ task.id? "Edit" : "Create a Task"}</button>
      </form>
    </div>
  )
}
