
import News1stFage from "./News1sFage";
import RightSideNews from "./RightSideNews";
import News2ndFage from "./News2ndFage";
import RightSideNews2 from "./RightSideNews2";
import Advertise2 from "./Advertise2";


function Content() {
    return (
        <div className='flex w-full h-screen justify-center'>

            <News1stfage/>
            <RightSideNews/>
            <hr></hr>
            <Advertise2 clip = "/prothom-alo-images/6825.gif"/>

        </div>
      
    );
}

export default Content;