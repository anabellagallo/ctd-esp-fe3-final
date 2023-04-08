
  import React, { useState } from 'react'
import Card from './Card'


const Form = () => {
    const [user, setUser] = useState({
        nombre:"" ,
        phone: "",
        email:"",
        website:"",
       })
       const handleSubmit =(event) =>{
        event.preventDefault()

       }
  return (
    <div>
        <form  onSubmit={handleSubmit}>
        <label > Nombre Completo</label>
        <input type="text" onChange={(event)=> setUser({...user,nombre:event.target.value})} />
        <label > Email</label>
        <input type="text" onChange={(event)=> setUser({...user,email:event.target.value})} />
        <label >phone</label>
        <input type="phone" onChange={(event)=> setUser({...user,phone:event.target.value})} />
        <select  onChange={(event)=> setUser({...user,website:event.target.value})}>
            <option value="">Seleccione una respuesta</option>
      </select>
      
        </form>
       
        <h3>tu nombre {user.nombre}  y tu email : {user.email} y tu website :{user.website} y tu {user.phone} </h3>

           
        


        
        <Card nombre= {user.nombre} medico= {user.medico}/>

        </div>
  )
}

export default Form