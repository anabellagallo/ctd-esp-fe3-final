import React from "react";





const  Card  =  ( { name , username , id } )  =>  {

  const  addFav  =  ( ) => {
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  volver  (
    < div  className = "card" >
        { /* En cada tarjeta deberan mostrar en nombre - usuario y el id */ }

        { /* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */ }

        { /* Ademas deberan integrar la logica para guardar cada Card en el localStorage */ }
        < button  onClick = { addFav }  className = "favButton" > Agregar fav </button>
        </div>
  )
}
export default Card