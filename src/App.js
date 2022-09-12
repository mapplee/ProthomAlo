
import './App.css';
import Header from './Header';
import Navbar2 from './Navbar2';
import Advertise from './Advertise';
import News1stHeading from './News1stHeading';
import Content from './Content';
import Advertise2 from './Advertise2';


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
    </div>
  );
}

export default App;
