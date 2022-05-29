import React from 'react'
import { Link } from 'react-router-dom'
import { MdLibraryAdd } from "react-icons/md";

export const Heading = () => {
  return (
    <div className='navBar'>
      <Link className='item' to="/"><h2>Task App</h2></Link>
      <Link className='item' to="/add">
      <button className='button'><MdLibraryAdd className='icon' /> Add Employee</button>
      </Link>
      
    </div>
  )
}
