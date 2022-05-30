export default function appReducer(state, action){

  /* console.log(state, action) */

  switch(action.type){
    case 'ADD_TASK':
      return {task: [...state.tasks, action.payload], }
    case 'DELETE_TASK':
      return { task: [] }
    default:
      break;

  }

  
}