import React from 'react'
import Card from '../Components/Card'
import { useUserStates } from '../Components/utils/global.context'
import doctor  from "../"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const{userList} =useUserStates()
  
  return (
    <main className="" >
      <h1>Home</h1>
      <img src="/public/doctor.jpg" alt=''/>
      <div className='card-grid'>
        {userList.map(users =><Link to={"/users/"+users.id} key ={users.id}><h4>{users.id}</h4></Link>)}
      </div>
    </main>
  )
}

export default Home