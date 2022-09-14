
import './App.css';
import Header from './Header';
import Navbar2 from './Navbar2';
import Advertise from './Advertise';
import Content from './Content';
import Advertise2 from './Advertise2';
import Content2 from './Content2';
import Content3 from './Content3';
import Binodan from './Binodan';
import JibonJapon from './JibonJapon';
import { Routes, Route, Link } from "react-router-dom";
import FullNews from './FullNews';
import Home from './Home';



function App() {
  return (
    <div className="w-full h-full justify-center">
      
      <Header/>
      <hr></hr>
      <Navbar2 />
      <hr></hr>
      <Advertise clip = "/prothom-alo-images/cityGrup.jpeg"/>
      <hr></hr>
      
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<FullNews/>} />
        
      </Routes>
     
      
     
      
    </div>
  );
}

export default App;
