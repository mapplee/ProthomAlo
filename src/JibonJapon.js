
function Jibon ({image, heading, news, ptime}){
    return (
            <div className="w-[25%] h-full p-5 ">
                        
                <img src = {image} className="w-full h-full"/>
                <p className="text-2xl font-bold mt-2">{heading}</p>                       
                <p className="text-lg mt-3">{news}</p>
                <p className="mt-1 text-gray-600">{ptime}</p>

                       
            </div>
    );
}

const japon = [
            {image: "/prothom-alo-images/1479.webp",    heading: "এমির লালগালিচা মাতানো ১০ ফ্যাশন", news: "লালগালিচার সবচেয়ে পরিচিত পোশাক আরমানির ফ্লোরলেন্থ গোলাপি গাউন তো ছিলই, এর বাইরেও দেখা গেল লুই ভুঁতোর স্কয়ার কাট ক্রপ টপ বা", ptime: "৫ ঘণ্টা আগে"},
            {image: "/prothom-alo-images/THUMB.webp",   heading: "ঢাকায় সালমান খানের ফ্যাশন ব্র্যান্ড",   news: "সালমান খান বলেন, ‘হাই বাংলাদেশ। ঢাকার প্রাণকেন্দ্রে আপনাদের জন্য চমক নিয়ে আসছে বিয়িং হিউম্যান ক্লদিং লাইন।", ptime: "৫ ঘণ্টা আগে"},
            {image: "/prothom-alo-images/AB_1436.webp", heading: "ভাদ্রে কেন কাপড় রোদে দেবেন?",     news: "শখের পোশাক সামান্য রোদ না পাওয়ার কারণে নষ্ট হয়ে যেতে পারে। ভাদ্রের রোদের প্রবল তাপে আলমারিতে অনেক দিন আটকে থাকা কাপড়", ptime: "৫ ঘণ্টা আগে"},
            {image: "/prothom-alo-images/SY_4749.webp", heading: "অ্যাপল জিঞ্জার মোহিতোর রেসিপি",    news: "আপেল ও আদার রসে তৈরী হবে এই পানীয়...", ptime: "৫ ঘণ্টা আগে"}
            ];


function JibonJapon (){
    const jibon_japon = japon.map(t => <Jibon image ={t.image} heading ={t.heading} news = {t.news} ptime = {t.ptime}/>);
    return (
        
        <div className="w-full h-full mt-1 ">
                    <div className="flex ml-12 pl-20 "><img src="/prothom-alo-images/download.jpeg" className="w-[1.5%] h-[1%] mt-12"/>
                        <span className= "pl-3 text-2xl font-bold hover:text-blue-800 mt-12">জীবনযাপন</span>
                    </div>

                <div className='w-[90%] h-[50%] flex  divide-x-2 ml-12 pl-12'>

                    {jibon_japon}

                </div> 
        </div>
    );
} 
export default JibonJapon;