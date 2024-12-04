import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { useDentistState } from '../Context/GlobalContext'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {dentists} = useDentistState()
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map ((dentist) => 
        <Card key={dentist.id}  dentist={dentist}/>
      )}
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home