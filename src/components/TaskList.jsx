import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from "../context/GlobalContext"

export const TaskList = () => {
  const {tasks, deleteTask, toggleTaskDone} = useContext(GlobalContext);
  /* console.log(context) */
  return (
    <div>
      {
        tasks.map(task =>(
          <div className='card' key={task.id}>
            <div>
              <span>{task.title}</span>
              <span>{task.id}</span>
              <p>{task.description}</p>
              <button className='btn colorM' onClick={()=> toggleTaskDone(task.id)}>
                {task.done? "Undone" : "Done"}
              </button>
            </div>
            <div>
              <Link to={`/edit/${task.id}`} className='btn colorgray link'>Edit</Link>
              <button className='btn colorred' onClick={()=>deleteTask(task.id)}>Delete</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}
