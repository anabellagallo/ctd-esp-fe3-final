import React from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  
  
  
  const Form = () => {
      const [user, setUser] = useState({
          nombre:"" ,
          obraSocial: "",
          email:"",
          medico:"",
         })
         const handleSubmit =(event) =>{
          event.preventDefault()
  
         }
    return (
      <div>
          <form  onSubmit={handleSubmit}>
          <label > Nombre Completo</label>
          <input type="text" onChange={(event)=> setUser({...user,nombre:event.target.value})} />
          <label > Obra social</label>
          <input type="text" onChange={(event)=> setUser({...user,obraSocial:event.target.value})} />
          <label >Email</label>
          <input type="email" onChange={(event)=> setUser({...user,email:event.target.value})} />
          <select  onChange={(event)=> setUser({...user,medico:event.target.value})}>
              <option value="">Seleccione una respuesta</option>
              <option value="Pediatra">Pediatra</option>
              <option value="Cardiologo">Cardiologo</option>
              <option value="Nutricionista">Nuticionista</option>
          </select>
        
          </form>
</div>
    )
  }