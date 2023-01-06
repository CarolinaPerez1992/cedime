import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className="header">
        <img src={Logo} className="logo" alt="logo_cedime" />
    </div>
  )
}

export default Header