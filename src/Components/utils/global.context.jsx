import { createContext ,useContext,useState,useEffect} from "react";

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
  


export const SaludStates = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const[saludList,setSaludList] = useState([])
  const url = ``
 useEffect(() =>{
     const fetchSalud = async()=>{
     let res = await fetch(url)
     let data = await res.json()
     setSaludList(data)
     }
     fetchSalud()
 },[])
  return (
    <ContextGlobal.Provider value={{saludList}}>
      {children}
    </ContextGlobal.Provider>
  );
}
export default ContextProvider
