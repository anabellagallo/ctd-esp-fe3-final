import {Route,Routes} from "react-router-dom"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "../src/Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { useContext } from "react";



function App() {
  const {themeState} = useContext()
  return (
      <div className="App" style={{backgroundColor: themeState.bgColor , color : themeState.color}}>
        <h1>Home</h1>
        <Navbar/>
        
        <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/favs" element = {<Favs/>}/>
        <Route path="/detail/:id" element = {<Detail/>}/>
        <Route path="/contact" element = {<Contact/>}/>
         </Routes>
          <Footer/>
          
      </div>
  );
}

export default App;
