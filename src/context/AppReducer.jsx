export default function appReducer(state,{type, payload}){

  console.log(state.tasks, 'tasssss')

  switch(type){
    case 'ADD_TASK':
      return {
        tasks: [...state.tasks, payload], 
      }
    case 'DELETE_TASK':
      return { 
        tasks: state.tasks.filter(task => task.id !== payload)
      }
    case 'UPDATE_TASK':
      const updatedTask = payload

      const updateTasks = state.tasks.map(task =>{
        if(task.id === updatedTask.id){
          task.title = updatedTask.title
          task.description = updatedTask.description
        }
          return task
        })
        return{
          tasks: updateTasks,
        }
    case 'TOGGLE_TASK_DONE':
      return {
        tasks: state.tasks.map((task)=>
        task.id === payload ? { ...task, done: !task.done} : task
        ),
      }

    default:
      return state

  }

  
}