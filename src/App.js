
import './App.css';
import Header from './Header';
import Navbar2 from './Navbar2';
import Advertise from './Advertise';
import News1stHeading from './News1stHeading';
import Content from './Content';


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
    </div>
  );
}

export default App;
