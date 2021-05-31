//import logo from './logo.svg';
import './App.css';
import Navber from './Components/Header/navber/Navber'
import Header from './Components/Header/Header'
import Committee from './Components/committee/committee'
import Footer from './Components/Footer/Footer'
import Mamber from "./Components/mamber/Mamber"
import Sodosso from "./Components/mamber/sodosso"


function App() {
  return (
    <div>
   <Navber/>
   <Header/>
   <Committee/>
   <Sodosso/>
  <Mamber/>
 
   <Footer/>
   </div>
   
  );
}

export default App;
