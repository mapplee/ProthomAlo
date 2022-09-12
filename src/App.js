
import './App.css';
import Header from './Header';
import Navbar2 from './Navbar2';
import Advertise from './Advertise';
import News from './News';


function App() {
  return (
    <div className="w-full h-full bg-blue-300">
      <Header />
      <Navbar2 />
      <Advertise clip = "/prothom-alo-images/cityGrup.jpeg"/>
      <News />
    </div>
  );
}

export default App;
