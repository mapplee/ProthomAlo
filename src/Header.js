
function Header (){
    return (
        <div>
            <div className="w-full h-1/6 bg-white flex">
                    <div className="w-1/12 h-full flex flex-row">

                                <img src="prothom-alo-images/01lefts.jpeg" className="w-[20%] h-[20%] m-3"/>
                                <img src="prothom-alo-images/04searchicon.jpeg" className="w-[30%] h-[30%] m-3"/>
                    </div>
                
                    <div className="w-10/12 h-2/6 flex justify-center bg-white">
                        <img src="prothom-alo-images/palo-bangla.svg" className="w-[25%] h-[25%] mt-5"/>
                    </div>
                    
                    <div class="w-[12%] h-full flex flex-row-reverse mt-5">
                        <div class="w-[70%] h-full m-2 border">Login</div>
                        <div class="w-[15%] h-full"><img src="prothom-alo-images/01notifacatioicon.jpeg" class="h-[30%] w-full mt-2"/></div>
                    </div>
            </div>
            <div className="flex flex-row bg-white">
            <div className="flex m-2 w-6/12">শনিবার, ১০ সেপ্টেম্বর ২০২২</div>
            <div class="w-6/12 h-full flex flex-row-reverse m-2 text-md">English Edition</div>
            </div>

        </div>
        
       
        
    );
}
export default Header;