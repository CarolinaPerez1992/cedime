import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className="header">
        <img src={Logo} className="logo" alt="logo_cedime" />
        <ul className='header-menu'>
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Servicios</li>
            <li>Galería</li>
            <li>Blog</li>
            <li>Contacto</li>
        </ul>
    </div>
  )
}

export default Header