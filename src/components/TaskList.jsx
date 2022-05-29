import React, {useContext} from 'react'
import { GlobalContext } from "../context/GlobalContext"

export const TaskList = () => {
  const {task} = useContext(GlobalContext);
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
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}
