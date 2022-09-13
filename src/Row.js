function Row (){
    return (
        <div className='w-[66%] h-[30%] flex flex-row ml-12 pl-12 divide-x-2 bg-blue-200'>
          
                <div className="w-full h-[50%] p-1 ">
                    <img src = "/prothom-alo-images/1000.webp" className="w-full h-[70%]"/>
                    <p className="text-2xl font-bold mt-3">নির্বাচন কমিশন/ ইভিএম কিনতে প্রস্তাব উঠছে</p>
                    <p className="mt-5 text-gray-600">২ ঘণ্টা আগে</p>
                </div>
                <div className="w-full h-[50%] p-1 ">
                    <img src = "/prothom-alo-images/train.webp" className="w-full h-[70%]"/>
                    <p className="text-2xl font-bold mt-3">লাইনচ্যুতির ৮ ঘণ্টা পর রাজশাহীর রুটে রেল যোগাযোগ শুরু</p>
                    <p className="mt-5 text-gray-600">২ ঘণ্টা আগে</p>
                </div>
          
                <div className="w-full h-[50%] p-1 ">
                    <img src = "/prothom-alo-images/Muhammad.webp" className="w-full h-[70%]"/>
                    <p className="text-2xl font-bold mt-3">টেকসই উন্নয়নে চাই পরিবেশবান্ধব সেবা</p>
                    <p className="mt-5 text-gray-600">২ ঘণ্টা আগে</p>
                </div>
                   

        </div>
    );
}
export default Row;