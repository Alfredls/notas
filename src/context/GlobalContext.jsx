import { createContext, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import appReducer from './AppReducer'

const initialState = {
  tasks: [
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
    dispatch({type: 'ADD_TASK', payload:{...task, id:uuidv4()}})
  }

  const deleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id})
  }

  const updateTask = (task) =>{
    dispatch({type: 'UPDATE_TASK', payload: task})
  }

  const toggleTaskDone = (id)=>{
    dispatch({
      type: 'TOGGLE_TASK_DONE', payload: id
    })
  }

  return <GlobalContext.Provider value={{...state, addTask, deleteTask, updateTask, toggleTaskDone}}>
    {children}
  </GlobalContext.Provider>
}