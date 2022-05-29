import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { Heading } from "./components/Heading"
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'

function App() {

  return (
    <div className='container'>
      <Heading />

      <div className='containerB'>
      <Routes>
        <Route path='/' element={<TaskList />} />
        <Route path='/add' element={<TaskForm />} />
      </Routes>
      </div>
      
    </div>
  )
}

export default App
