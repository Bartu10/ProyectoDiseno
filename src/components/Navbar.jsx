import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../images/4-2-chess-png-picture.png"

const Navbar = () => {
  return (
<header>        
<NavLink to='/' className='btn btn-outline-primary'><img src={logo} className="logo" />
<span>CHESS.COM</span></NavLink>
<nav>
    <ul>
        <li>
        <NavLink to='/Login' className='btn btn-outline-primary'>
          Login
        </NavLink></li>
        <li><NavLink to='/Perfil' className='btn btn-outline-primary'>
          Perfil
        </NavLink></li>
        <li><NavLink to='/Leaderboard' className='btn btn-outline-primary'>
          Leaderboard
        </NavLink></li>
        <li><NavLink to='/Contacto' className='btn btn-outline-primary'>
          Contacto
        </NavLink></li>
        <li><NavLink to='/Favorito' className='btn btn-outline-primary'>
          J.Favorito
        </NavLink></li>
        
    </ul>
</nav>
</header>
  )
}




export default Navbar
