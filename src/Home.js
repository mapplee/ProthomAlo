import Content from "./Content";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Advertise from "./Advertise";
import Advertise2 from "./Advertise2";
import Binodan from "./Binodan";
import JibonJapon from "./JibonJapon";
import Navbar2 from "./Navbar2";

function Home() {
    return (
        <div className="w-full h-full justify-center">
             <Content/>
             <Advertise2 clip = "/prothom-alo-images/6825.gif"/>
             <hr></hr>
             <Content2/>
             <Content3/>
             <Binodan/>
             <JibonJapon/>
             <Advertise clip = "/prothom-alo-images/6637006609207176883.jpeg"/>
             <Navbar2/>
    </div>
    );
}
export default Home;