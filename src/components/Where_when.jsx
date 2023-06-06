import React from 'react'
import './styles/Where_when.css'

const where_when = () => {
  return (
    <div className='where_when'>
      <div className='where'>
        <h3>
          ¿Donde Será el Evento?
        </h3>
        <p>
          El evento será en Cra. 41b #2d1, Bogotá (Parque publico el girasol, Puente Aranda),
          se tendran mesas en la mitad de el parque para que todas aquellas personas que 
          se hallan inscrito puean registrar su asistencia a el evento.
        </p>
      </div>
      <div className='when'>
        <h3>
          ¿Cuando Será el Evento?
        </h3>
        <p>
          El evento iniciara aproximadamente a las 9 am, si es de tu gusto puedes llegar
          antes para interactuar con colegas ya sea de tu misma profesion y 
          connocimiento como colegas expertos  en otras areas.
        </p>
      </div>
    </div>
  )
}

export default where_when