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
          El evento será en Cra. 41b #2d1, Bogotá (Parque Público El Girasol, Puente Aranda),
          se tendrán mesas en la mitad del parque para que todas aquellas personas que
          se hayan inscrito puedan registrar su asistencia al evento.
        </p>
      </div>
      <div className='when'>
        <h3>
          ¿Cuando Será el Evento?
        </h3>
        <p>
          El evento será el día 28 de julio e iniciará aproximadamente a las 9 am, si es de tu gusto puedes llegar
          antes para interactuar con colegas ya sea de tu misma profesión y
          conocimiento como colegas expertos  en otras áreas.
        </p>
      </div>
    </div>
  )
}

export default where_when