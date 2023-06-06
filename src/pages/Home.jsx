import React from 'react'
import What_is from '../components/What_is'
import Where_when from '../components/Where_when'
import Objective from '../components/Objective'
import Awards from '../components/Awards'
import Inscription from '../components/Inscription'

const Home = () => {
  return (
    <section>
      <What_is/>
      <Where_when/>
      <Objective/>
      <Awards/>
      <Inscription/>
    </section>
  )
}

export default Home