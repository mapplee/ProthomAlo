function RightSideNews3 (){
    return (
        <div className='w-3/12 h-full divide-y-2 mt-4 '>
            <div className="w-full h-[40%] p-5">
                <img src = "/prothom-alo-images/15885270435632840151.gif" className="w-full h-[90%] mt-12 p-3"/>
            </div>
            

            <div className="w-full h-[40%] p-5 divide-x-2 divide-x-2">
                
                <div className="w-full h-[35%] ">
                    <div className="w-[60%]"><p className="text-2xl text-blue-700 font-bold mt-2">আমার এলাকার খবর</p></div>
                    
                    <div className="w-full text-xl"> <input type="text" placeholder="বিভাগ" class=" h-[60%] w-[90%] p-4 border rounded-md m-3"/></div>
                    <div className="w-full text-xl"> <input type="text" placeholder="জেলা" class=" h-[60%] w-[90%] p-4 border rounded-md m-3"/></div>
                    <div className="w-full text-xl"> <input type="text" placeholder="উপজেলা" class=" h-[60%] w-[90%] p-4 border rounded-md m-3"/></div>
                    <div className="w-full text-2xl"> <input type="text" placeholder="খুঁজুন" class=" text-center text-[#FFFFFF] font-bold h-[60%] w-[90%] bg-blue-700 p-4 border rounded-md m-3"></input></div> 
                    
                </div>

            </div>

            
            
        </div>
    );
}
export default RightSideNews3;