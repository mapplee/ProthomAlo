import japon from "./data";
import { useParams } from "react-router-dom";

function FullNews (){
    const {id} = useParams();
    const s_news = japon[id];
    const {heading, image, ptime} = japon[id];
    return (
        
        <div className="w-7/12 h-4/6 m-10 flex justify-center">
            <div className="w-7/12 h-4/6 ">
            <p className="text-4xl font-bold">{heading}</p>
            <img src={s_news.image} className="w-400 h-300 "/>
            <p>{japon[id].ptime}</p>

            </div>
        </div>
    )
}
export default FullNews;