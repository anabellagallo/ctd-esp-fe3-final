import { createContext ,useContext,useState,useEffect, useReducer} from "react";

export const initialState = {theme: "", data: []}
const themes ={
  dark:{
    theme:false,
    bgColor:`#12121296`,
    color:`white`,
    fontSize:"30px",
  },
  light:{
    theme:true,
    bgColor:"white",
    color:"black",
    fontSize:"30px"

  }

  }
  const initialThemeState = themes.light
  
const themeReducer = (state,action) =>{
  switch (action.type) {
    case "Switch_dark":
      return themes.dark
      case "Swith_light":
      return themes.light
  
    default:
      throw new Error 
  }
}
  const initialFavState = JSON.parse(localStorage.getItem("favs")) || []
  const favReducer =(state,action) =>{
    switch (action.type) {
      case "ADD_FAV":
        
        return[...state,action.payload]
    
      default:
        throw new Error
    }
  }
  const initiaApiState={usersList: [],usersDetail : []}
  const apiReducer =(state,action ) =>{
    switch (action.type) {
      case "Get_users":
        return {usersList :action.payload, usersDetail : state.usersDetail}
    
      
    }
  }

export const UsersStates = createContext();

export const ContextProvider = ({ children }) => {

  const [userList,setUsersList] =useState([])
  const url = `https://jsonplaceholder.typicode.com/users`
  const [themeState, themeDispath] = useReducer[themeReducer,initialThemeState]
  const [favState,FavDispath] = useReducer [favReducer,initialFavState]
  const [apiState,apiDispath] = useReducer [apiReducer,initiaApiState]
  useEffect(()=>{
    localStorage.setItem("favs",JSON.stringify(favState))
  },[favState])
 useEffect(() =>{
     const fetchUsers = async()=>{
     let res = await fetch(url)
     let data = await res.json()
     setUsersList(data)
     apiDispath({type:"Get_Users",payload:data})
     }
     fetchUsers()
 },[])
  return (
    <ContextGlobal.Provider value={{usersList}}>
      {children}
    </ContextGlobal.Provider>
  );
}
export default ContextProvider
