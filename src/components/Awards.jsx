import React from 'react'
import './styles/Awards.css'

const Awards = () => {
  return (
    <div className='awards'>
      <div className='awards_cards'>
        <div className='card'>
          <h4>
            Primer Puesto
          </h4>
          <p>
            El primer puesto recibirá 500 usd, ademas recibira tres ofertas de compañias
            importantes en el medio de el desarrollo web
          </p>
        </div>
        <div className='card'>
          <h4>
            Segundo Puesto
          </h4>
          <p>
            El segundo puesto recibirá 250 usd, este puesto recibira dos ofertas de compañias
            importantes en el medio de el desarrollo web
          </p>
        </div>
        <div className='card'>
          <h4>
            Tercer Puesto
          </h4>
          <p>
            El tercer puesto recibirá 100 usd, este puesto recibira una oferta de una compañia 
            importante en el medio de el desarrollo web
          </p>
        </div>
      </div>
      <div className='awards_img'>
        <img src="https://img.freepik.com/vector-premium/trofeo-medalla-oro-vector-ilustracion-dibujos-animados_480044-281.jpg?w=2000" alt="" />
      </div>
    </div>
  )
}

export default Awards