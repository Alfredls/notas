import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from "../context/GlobalContext"

export const TaskList = () => {
  const {task, deleteTask} = useContext(GlobalContext);
  /* console.log(context) */
  return (
    <div>
      {
        task.map(task =>(
          <div className='card' key={task.id}>
            <div>
              <span>{task.title}</span><span>{task.id}</span>
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
