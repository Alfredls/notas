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
    <div>
      <Heading />

      <Routes>
        <Route path='/' element={<TaskList />} />
        <Route path='/add' element={<TaskForm />} />
      </Routes>
      
    </div>
  )
}

export default App
