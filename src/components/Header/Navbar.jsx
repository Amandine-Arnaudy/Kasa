import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
    return (
        <header className='navbar'>
      <div className='navbar_logo'>
        <img src="src/assets/Logo.png" alt="Logo Kasa" />
      </div>
      <ul className='navbar_link'>
        <li> <NavLink to="/">Accueil</NavLink> </li>
        <li> <NavLink to="/about">A Propos</NavLink> </li>
      </ul>
    </header>
    )
}

export default Navbar
