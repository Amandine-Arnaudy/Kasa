import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.scss'
import headerImg from '../../assets/Logo.png'

function Navbar() {
  return (
    <header className='navbar'>
      <div className='navbar_logo'>
        <img src={headerImg} alt="Logo Kasa" />
      </div>
      <ul className='navbar_link'>
        <li> <NavLink to="/">Accueil</NavLink> </li>
        <li> <NavLink to="/about">A Propos</NavLink> </li>
      </ul>
    </header>
  )
}

export default Navbar