import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.scss'
import headerImg from '../../assets/Logo.png'

function Navbar() {
  return (
    <header className='navbar'>

      <div className='navbar_logo'>
        <img src={headerImg} alt="Logo" />
      </div>
      <ul className='navbar_link'>
        <li> <NavLink to="/">HOME</NavLink> </li>
        <li> <NavLink to="/projects">PROJECTS</NavLink> </li>
        <li> <NavLink to="/contact">CONTACT</NavLink> </li>
      </ul>

    </header>
  )
}

export default Navbar