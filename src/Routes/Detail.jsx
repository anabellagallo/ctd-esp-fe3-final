import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {salud, setSalud} = useState({})
  const {name} = useParams()
  const url =""
 useEffect(() =>{
  fetch(url)
  .then(res => res.json())
  .then(data=>setSalud(data))
 })
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      <h2>{salud.name}</h2>
      <h2>{salud.email}</h2>
      <h2>{salud.phone}</h2>
      <h2>{salud.website}</h2>
        
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail