
import './App.css';
import Header from './Header';
import Navbar2 from './Navbar2';
import Advertise from './Advertise';
import { Routes, Route, Link } from "react-router-dom";
import FullNews from './FullNews';
import Home from './Home';
import SectionRazniti from './SectionRazniti';



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
        <Route path="/menu" element={<SectionRazniti/>} />
        
     
        
      </Routes>
     
      
     
      
    </div>
  );
}

export default App;
