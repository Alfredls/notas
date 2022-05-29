import React, {useContext} from 'react'
import { GlobalContext } from "../context/GlobalContext"

export const TaskList = () => {
  const {task} = useContext(GlobalContext);
  /* console.log(context) */
  return (
    <div>
      {
        task.map(task =>(
          <div key={task.id}>
            <h1>{task.title}</h1>
          </div>
        ))
      }
    </div>
  )
}
