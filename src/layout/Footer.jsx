import React from 'react'
import './styles/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='footer_legals'>
          <ul className='legals_container'>
            <a href="https://www.google.com/?hl=es"><p>Aviso Legal</p></a>
            <a href="https://www.google.com/?hl=es"><p>Politica de Tratamiento de Datos</p></a>
            <a href="https://www.google.com/?hl=es"><p>Terminos y condiciones</p></a>
          </ul>
        </div>
        <div className='footer_socials'>
          <ul className='socials_container'>
            <a href="https://es-la.facebook.com/"><i className='bx bxl-facebook'></i></a>
            <a href="https://twitter.com/?lang=es"><i className='bx bxl-twitter' ></i></a>
            <a href="https://www.instagram.com/"><i className='bx bxl-instagram' ></i></a>
            <a href="https://www.youtube.com/"><i className='bx bxl-youtube' ></i></a>
            <a href="https://www.tiktok.com/es/"><i className='bx bxl-tiktok' ></i></a>
            <a href="https://www.linkedin.com/"><i className='bx bxl-linkedin' ></i></a>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer