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
          para forjar mejores profesionales, además de que los participantes
          interactúen entre sí para conocer más sobre las otras profesiones
          relacionadas con el mundo de la programación.
          Además, las empresas podrán seleccionar los programadores que más les
          guste y hacer una oferta de empleo que pueda ser interesante.
        </p>
      </div>
    </div>
  )
}

export default Objective