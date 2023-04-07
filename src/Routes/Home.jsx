import React from 'react'
import Card from '../Components/Card'
import { useSaludStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const{userList} =useUsersStates()
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {userList.map(users =><h4>{users.name}</h4>)}
      </div>
    </main>
  )
}

export default Home