
function News2ndFage (){
    return (
    <div className="w-[65%] h-full mb-10 ">
        <div className='w-full h-full flex flex-row divide-x-2 p-3'>
          
            <div className="w-[35%] h-[90%] p-5 mt-3 divide-y-2 ">
                <div className="">
                <span className= "p-1 m-2 text-xl font-bold hover:text-blue-800 ">পঠিত</span>
                <span className= "p-1 m-2 text-xl font-bold hover:text-blue-800 ">অলোচিত </span>
                <span className= "p-1 m-2 text-lg font-bold hover:text-blue-800 ">সুখবর</span></div>
                
                <div className="w-full m-3">
                    <p className="text-5xl font-bold text-gray-500 mt-4">১</p>
                    <p className="text-2xl font-bold mt-4 tracking-tight">যেসব কারণে খারকিভ থেকে পিছু হটল রাশিয়া</p>
                </div>
                <div className="w-full m-3">
                    <p className="text-5xl font-bold text-gray-500 mt-4">২</p>
                    <p className="text-2xl font-bold mt-4 tracking-tight">কারসাজিতে হিরোদের মুনাফা ১৪ কোটি, জরিমানা ৩ কোটি টাকা</p>
                </div>
                <div className="w-full m-3">
                    <p className="text-5xl font-bold text-gray-500 mt-4">৩</p>
                    <p className="text-2xl font-bold mt-4 tracking-tight">পররাষ্ট্রসচিবের সঙ্গে আলোচনা/ রাশিয়ার বিরুদ্ধে বাংলাদেশকে পাশে চায় ইউরোপীয় ইউনিয়ন</p>
                </div>
                <div className="w-full m-3">
                    <p className="text-5xl font-bold text-gray-500 mt-4">৪</p>
                    <p className="text-2xl font-bold mt-4 tracking-tight">মতামত/ ‘অবাধ্য’ বলিউডকে পোষ মানাতে মরিয়া বিজেপি</p>
                </div>
                <div className="w-full m-3">
                    <p className="text-5xl font-bold text-gray-500 mt-4">৫</p>
                    <p className="text-2xl font-bold mt-4 tracking-tight">নির্বাচন কমিশন/ ইভিএম কিনতে প্রস্তাব উঠছে</p>
                </div>
            </div>
          
            <div className="w-[65%] h-[65%] p-5 divide-y-2">
                <div className="w-full h-full p-2">
                    <div className="flex"><img src="/prothom-alo-images/download.jpeg" className="w-[4%] h-[4%] mt-3"/>
                    <span className= "p-1 m-2 text-2xl font-bold hover:text-blue-800 ">খেলা</span></div>
                    <div><img src = "/prothom-alo-images/01_02.webp" className="w-full h-[70%]"/>
                    <p className="text-xl">আজ টিভিতে যা দেখবেন (১৩ সেপ্টেম্বর ২০২২)</p></div>

                </div>
                <div className="w-full h-2/12 p-1 flex divide-x-2 ">
                    <div className="w-[50%] h-[50%] p-2">
                        <img src = "/prothom-alo-images/pdates.webp" className="w-full h-[70%]"/>
                        <p className="text-2xl font-bold mt-3">ইংলিশ প্রিমিয়ার লিগ/চেলসি-লিভারপুল, ইউনাইটেড-লিডস ম্যাচ স্থগিত</p>
                        <p className="mt-5 text-gray-600">২ ঘণ্টা আগে</p>
                    </div>
                    <div className="w-[50%] h-[50%] p-2">
                        <img src = "/prothom-alo-images/Mark_Boucher_AFP.webp" className="w-full h-[70%]"/>
                        <p className="text-2xl font-bold mt-3">বিশ্বকাপের পর সরে দাঁড়াবেন বাউচার</p>
                        <p className="mt-5 text-gray-600">২ ঘণ্টা আগে</p>
                    </div>
                
                </div> 
            </div>
          

        </div>     

    </div>    
      
    );
}

export default News2ndFage;