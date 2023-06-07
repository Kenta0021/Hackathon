import React, { useState } from 'react'
import './styles/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className='header'>
      <div className='header_title'>
        <a href="/">
          <h3>
            HACKATHON 2023
          </h3>
        </a>
      </div>
      <div id='menu' className='header_menu'>
        <ul className={`header_hamburger ${isOpen && 'active'}`}>
          <div className='btn_close' onClick={() => setIsOpen()}>
            <i className='bx bx-x' ></i>
          </div>
          <Link to='/Sign_up'><h3>Inscribirse</h3></Link>
        </ul>
      </div>
      <div className='btn_open' onClick={() => setIsOpen(!isOpen)}>
        <i className='bx bx-menu'></i>
      </div>
    </header>
  )
}

export default Header