
const p_time = "mt-1 text-gray-600 p-2";

function Ananda ({image, heading, ptime}){
    const d_size = "w-full h-[35%] flex mt-2 p-2";
    const h_size = "text-2xl font-bold mt-2";
    return (
        <div className="w-full h-full">
            <div className={d_size}>
                    <div className="w-[60%]"><p className={h_size}>{heading}</p></div>
                    <div className="w-[40%]"><img src = {image} className="w-full h-full"/></div>
            </div>
                    <p className={p_time}>{ptime}</p>

        </div>
    );
}

const h_class = "text-3xl text-blue-700 font-bold mt-3";

function Anoda2 ({image, heading, news, ptime}){
    return (
            <div className="w-full h-full">
                <img src = {image} className="w-full h-[70%]"/>
                <p className={h_class}>{heading}</p>
                <p className="text-lg mt-3">{news}</p>
                <p className={p_time}>{ptime}</p>
            </div>
    );
}

const binodon = [
    {image: "/prothom-alo-images/dollar.webp",    heading: "এমি জিতল কে বা কারা, দেখে নিন এক নজরে",            ptime: "৫ ঘণ্টা আগে"},
    {image: "/prothom-alo-images/Russian.webp",   heading: "বিশ্বখ্যাত পরিচালক জ্যঁ লুক গদার আর নেই",                ptime: "৫ ঘণ্টা আগে"},
    {image: "/prothom-alo-images/AB_1436.webp",   heading: "এমিতে এশিয়ার অভিনেতার বাজিমাত, কৃষ্ণাঙ্গ অভিনেত্রীর রেকর্ড", ptime: "৫ ঘণ্টা আগে"},
    ];

const binodon2 = [
    {image: "/prothom-alo-images/Untitled_1.webp", heading: "বলিউডে বিদেশিদের দাপটে কাজ হারাচ্ছেন ভারতীয়রা",  ptime: "৫ ঘণ্টা আগে"},
    {image: "/prothom-alo-images/1479.webp",       heading: "দেহরক্ষী নিয়ে শুটিং",                          ptime: "৫ ঘণ্টা আগে"},
    {image: "/prothom-alo-images/HUMBNAIL.webp",   heading: "‘অভিনয় ছাড়ছি না, কখনোই ছাড়ব না’",           ptime: "৫ ঘণ্টা আগে"},
    ];


function Binodan (){
    const anonda = binodon.map(x => <Ananda image={x.image} heading={x.heading} ptime={x.ptime}/>);
    const anondo = binodon2.map(y => <Ananda image={y.image} heading = {y.heading} ptime = {y.ptime}/>);
    return (
        
        <div className="w-full h-full mt-20 ">
                    <div className="flex ml-12 pl-20 "><img src="/prothom-alo-images/download.jpeg" className="w-[1.5%] h-[1%] mt-12"/>
                        <span className= "pl-3 text-2xl font-bold hover:text-blue-800 mt-12">বিনোদন</span>
                    </div>

                <div className='w-[90%] h-[50%] flex  divide-x-2 ml-12 pl-12'>

                    <div className="w-[33%] h-[90%] pl-5">
                        {anonda}
                    </div>
                
                    <div className="w-[34%] h-[90%] p-5 ">
                        <Anoda2 image = "/prothom-alo-images/HOWRAH.webp" 
                                heading="বৃষ্টিতে ভিজতে ভিজতে ভাবনা..." 
                                news= "বৃষ্টিতে না ভিজলে যেন অভিনেত্রী আশনা হাবীব ভাবনার ঘুম হয় না। আজও সকালে ছাদবাগানে গুঁড়ি গুঁড়ি বৃষ্টিতে ভিজেছেন তিনি।" 
                                ptime= "৫ ঘণ্টা আগে"/>
                    </div>
                
                    <div className="w-[33%] h-[90%] pl-5">

                            {anondo}

                    </div>

            </div> 
        </div>
    );
} 
export default Binodan;