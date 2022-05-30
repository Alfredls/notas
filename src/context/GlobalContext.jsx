import { createContext, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import appReducer from './AppReducer'

const initialState = {
  task: [
    {
      id: '1',
      title: 'title one',
      description: 'some description',
      done: false,
    },
    {
      id: '2',
      title: 'title two',
      description: 'some description 2',
      done: false,
    },
  ],
}

export const GlobalContext = createContext (initialState)

export const ContextProvider = ({children})=>{

  const [state, dispatch] = useReducer(appReducer, initialState)

  const addTask = (task)=>{
    /* console.log(task, 'adding a task'); */
    dispatch({type: 'ADD_TASK', payload:{...task, id:uuidv4()}})
  }

  const deleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id})
  }

  return <GlobalContext.Provider value={{...state, addTask, deleteTask}}>
    {children}
  </GlobalContext.Provider>
}