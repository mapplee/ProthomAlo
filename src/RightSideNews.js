
function RightSideNews (){
    return (
        <div className='w-3/12 h-full'>
            <div className="w-full h-[40%] p-5">
                <img src = "/prothom-alo-images/bigga.jpeg" className="w-full h-full"/>
            </div>
            
            <div className="w-full h-[40%] p-5">
                <img src = "/prothom-alo-images/prothom.webp" className="w-full h-[70%]"/>
                <p className="text-2xl font-bold mt-2">বলিউডের দুর্দিনে তিন দিনে কত আয় করল ‘ব্রহ্মাস্ত্র’</p>
                <p className="mt-5 text-gray-600">২ ঘণ্টা আগে</p>
            </div>

            <div className="w-full h-[40%] p-5">
                <div className="w-full h-[35%] flex">
                    <div className="w-[60%]"><p className="text-2xl font-bold mt-2">বিশ্লেষণ/ প্রাইভেট কার নিয়ে কেন স্কুলে যেতে হয়</p>
                    </div>
                    <div className="w-[40%]"><img src = "/prothom-alo-images/prothomal.webp" className="w-full h-full"/></div>
                </div>
                <p className="mt-1 text-gray-600">৫ ঘণ্টা আগে</p>

                <div className="w-full h-[35%] flex mt-5 bg-blue-200">
                    <div className="w-[60%]"><p className="text-2xl font-bold ">ছাপা পত্রিকার এবং ছাপা ম্যাগাজিনের হুবহু প্রতিচ্ছবি</p>
                    </div>
                    <div className="w-[40%]"><img src = "/prothom-alo-images/img.webp" className="w-full h-full"/></div>
                </div>
                <p className="mt-1 text-gray-600">৫ ঘণ্টা আগে</p>

            </div>

            
            
        </div>
    );
}
export default RightSideNews;