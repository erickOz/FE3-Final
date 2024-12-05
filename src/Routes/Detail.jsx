import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../Styles/index.css"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const params = useParams()
  const [dentists, setDentists] = useState({})
  console.log(params)
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
const url = `https://jsonplaceholder.typicode.com/users/` + params.id

useEffect(() => {
    axios(url).then((respuesta) => {
      console.log(respuesta.data)
      setDentists(respuesta.data)
    })
  
  } ,[]);

  return (
    <>
    <div className='detail-container'> 
      <h1>Detail Dentist {dentists.id} </h1>
      <h2> Nombre: {dentists.name}</h2>
      <h2> Apellido:{dentists.username}</h2>
      <h2> Telefono:{dentists.phone}</h2>
      <h2> Website: {dentists.website}</h2>
      
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail