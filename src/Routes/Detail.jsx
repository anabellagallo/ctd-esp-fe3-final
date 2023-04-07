import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Favs from './Favs'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {users, setUsers} = useState({})
  const {id} = useParams()
  const url ="https://jsonplaceholder.typicode.com/users" + id
 const {favDispath,apiState,apiDispath} =useUsersStates()
  
 useEffect(() =>{
  fetch(url)
  .then(res => res.json())
  .then(data=>apiDispath({type: "Get_Users",payload:data}))
 },[])

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const addFav=()=>{
    favDispath({type:"ADD_FAV",payload :apiState.Detail.id})
  }
  return (
    <>
    <h2>{apiState.Detail.id}</h2>
      <h1>Detail Dentist id </h1>
      <h2>{users.id}</h2>
      <h2>{users.name}</h2>
      <h2>{users.email}</h2>
      <h2>{users.phone}</h2>
      <h2>{users.website}</h2>
        
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail