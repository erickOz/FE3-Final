import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


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
      <h1>Detail Dentist id </h1>
      <h2> {dentists.name}</h2>
      <h2> {dentists.username}</h2>
      <h2> {dentists.phone}</h2>
      <h2> {dentists.website}</h2>
      

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail