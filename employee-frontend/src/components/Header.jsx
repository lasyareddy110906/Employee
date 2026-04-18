import React from 'react'
import { NavLink } from 'react-router'



function Header() {
  return (
    <nav className='p-3.5'>
      <ul className='flex justify-end gap-5 bg-blue-500 p-3.5 text-2xl'>
        
        <li>
          <NavLink 
            to="/" 
            className={({isActive}) => isActive ? "text-blue-100 font-bold" : "text-gray-700 hover:text-white"}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/create" 
            className={({isActive}) => isActive ? "text-blue-100 font-bold" : "text-gray-700 hover:text-white"}
          >
            CreateEmp
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/list" 
            className={({isActive}) => isActive ? "text-blue-100 font-bold" : "text-gray-700 hover:text-white"}
          >
            ListOfEmp
          </NavLink>
        </li>

      </ul>
    </nav>
  )
}

export default Header