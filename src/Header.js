


function Header (){
    const d = new Date();
    return (
        <div className="w-full h-1/6 ml-20">
            <div className="w-full h-1/6 flex">
                    <div className="w-1/12 h-full flex flex-row">

                                <img src="prothom-alo-images/01lefts.jpeg" className="w-[20%] h-[20%] m-3"/>
                                <img src="prothom-alo-images/04searchicon.jpeg" className="w-[30%] h-[30%] m-3"/>
                    </div>
                
                    <div className="w-9/12 h-2/6 flex justify-center ">
                        <img src="prothom-alo-images/palo-bangla.svg" className="w-[23%] h-[23%] mt-5"/>
                    </div>
                    
                    <div class="w-[12%] h-full flex flex-row-reverse mt-5">
                        <div class="w-[60%] h-[90%] mt-1 ml-8 mr-20 border text-center p-1">Login</div>
                        <div class="w-[15%] h-full"><img src="prothom-alo-images/01notifacatioicon.jpeg" class="h-[30%] w-full mt-1"/></div>
                    </div>
            </div>
            <div className="flex flex-row m-2">
                    <div className="flex w-6/12">শনিবার, ১০ সেপ্টেম্বর ২০২২</div>
                    <div class="w-5/12 h-full text-md text-right">English Edition</div>
            </div>

        </div>
        
       
        
    );
}
export default Header;