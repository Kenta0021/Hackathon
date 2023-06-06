import React from 'react'
import './styles/Objective.css'

const Objective = () => {
  return (
    <div className='objective'>
      <div className='objective_img'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Mudghv2NYsXwIbcYRMqvZ4K_HEKbqESukQ&usqp=CAU" alt="" />
        </div>
      <div className='text_container'>
        <h3 className='objective_title'>
          Objetivo
        </h3>
        <p className='objective_text'>
          El objetivo de este evento es el fomentar la competitividad
          para forgar mejores profesionales, ademas de que los participantes
          interactuen entre si para concocer mas sobre las otras profesiones
          relacionadas con el mundo de la programación.
          Ademas las empresas podran seleccionar los programadores que mas les
          guste y hacer una oferta de empleo que pueda ser interesante.
        </p>
      </div>
    </div>
  )
}

export default Objective