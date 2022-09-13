
import './App.css';
import Header from './Header';
import Navbar2 from './Navbar2';
import Advertise from './Advertise';
import Content from './Content';
import Advertise2 from './Advertise2';
import Content2 from './Content2';
import Content3 from './Content3';
import Row from './Row';


function App() {
  return (
    <div className="w-full h-full justify-center">
      <Header/>
      <hr></hr>
      <Navbar2 />
      <hr></hr>
      <Advertise clip = "/prothom-alo-images/cityGrup.jpeg"/>
      <hr></hr>
      <Content/>
      <Advertise2 clip = "/prothom-alo-images/6825.gif"/>
      <hr></hr>
      <Content2/>
      <Content3/>
      <Row/>
      
     
      
    </div>
  );
}

export default App;
