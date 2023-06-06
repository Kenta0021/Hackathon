import React from 'react'
import './styles/Form.css'

const Form = () => {
  return (
    <div className='sign_up'>
      <div className='sign_up_container'>
        <form action="">
          <h2 className='sign_up_title'>Registro</h2>
          <label htmlFor="POST_name">Nombre:</label>
          <input type="text" name='name' />
          <br /> <br />
          <label htmlFor="POST_lastname">Apellido:</label>
          <input type="text" name='lastname' />
          <br /> <br />
          <label htmlFor="POST_gender">Sexo:</label>
          <input type="text" name='gender' />
          <br /> <br />
          <label htmlFor="POST_age">Edad:</label>
          <input type="number" name='age' />
          <br /> <br />
          <label htmlFor="POST_nationality">Nacionalidad:</label>
          <input type="text" name='nationality' />
          <br /> <br />
          <label htmlFor="disability">Discapacidad:</label>
          <input type="text" name='disability' />
          <br /> <br />
          <label htmlFor="POST_email">Correo Electronico:</label>
          <input type="text" name='email' />
          <br /> <br />
          <label htmlFor="POST_phome">Numero Telefonico:</label>
          <input type="number" />
          <br /> <br />
          <label htmlFor="category">Categoria:</label>
          <input type="text" name='category' />
          <br /> <br />
          <button className='sign_up_button' type='submit'>
            Registrarse
          </button>
        </form>
      </div>
    </div>
  )
}

export default Form