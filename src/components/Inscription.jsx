import React from 'react'
import './styles/Inscription.css'
import Sign_up from '../pages/Sign_up'
import { Link } from 'react-router-dom'

const Inscription = () => {
  return (
    <div className='inscription_description'>
      <div className='text_container'>
        <h4>
          Inscripción
        </h4>
        <p>
          Puedes inscribirte ahora mismo aquí:
        </p>
      </div>
      <div className='button_container'>
        <Link to='/Sign_up'>
          <button className='inscription_button'>
            Inscribirse
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Inscription