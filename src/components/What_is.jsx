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
          Hackathon es un evento realizado por taxis libres S.A.
          En el cual se realizan competencias enfocadas al desarrollo web,
          en estas competencias pueden participar ingenieros, programadores, diseñadores,
          comunicadores, analistas de datos y demás perfiles.
          El objetivo principal es ejecutar retos en movilidad en taxi en menos de tres días.
        </p>
      </div>
      <div className='image_container'>
        <img src="https://cdn-icons-png.flaticon.com/512/1688/1688400.png" alt="" />
      </div>
    </div>
  )
}

export default what_is