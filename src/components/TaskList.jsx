import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from "../context/GlobalContext"

export const TaskList = () => {
  const {tasks, deleteTask, toggleTaskDone} = useContext(GlobalContext);
  /* console.log(context) */
  return (
    <div>
      {
        tasks.map((task, index) =>(
          <div className='card' key={task.id}>
            <div className='card-item'>
            <span className='number colorred'>{index+1}</span>
              <h3 className='card-title'>{task.title}</h3>
              <p className='card-p'>{task.description}</p>
              <button className='btn colorM' onClick={()=> toggleTaskDone(task.id)}>
                {task.done? "Undone" : "Done"}
              </button>
            </div>
            <div className='btns-c'>
              <Link to={`/edit/${task.id}`} className='btn colorgray link'>Edit</Link>
              <button className='btn colorred' onClick={()=>deleteTask(task.id)}>Delete</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}
