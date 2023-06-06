import React from 'react'
import './styles/What_is.css'

const what_is = () => {
  return (
    <div className='what_is'>
      <div className='description_container'>
        <h2 className='description_title'>
          ¿Que es Hackathon?
        </h2>
        <p className='description_text'>
          Hackathon es un evento reaalizado por Taxis Libres S.A.
          en el cual se realizan competencias enfocadas a el desarrollo web,
          en estas competencias pueden participar ingenieros, programadores, diseñadores,
          comunicadores, analistas de datos y demás perfiles.
          El objetivo principal es ejecutar retos en movilidad en taxi en menos de tres días.
        </p>
      </div>
      <div className='image_container'>
        <img src="https://www.nicepng.com/png/detail/403-4039907_diseo-y-desarrollo-web-building-a-website.png" alt="" />
      </div>
    </div>
  )
}

export default what_is