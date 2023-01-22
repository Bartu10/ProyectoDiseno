import React from 'react'
import DownBar from '../components/DownBar'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import "../sass/index.scss"



const LayoutPublic = () => {
  return (
    <div>
      <Navbar />
      <main className='contenedor' />
      <Outlet />
      <DownBar />
    </div>
  )
}

export default LayoutPublic
