
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Advertise from './Advertise';
import News from './News';


function App() {
  return (
    <div className="w-screen h-screen bg-blue-300">
      <Header />
      <Navbar />
      <Advertise />
      <News />
    </div>
  );
}

export default App;
