function Menu({name}){
        const kalar = "p-1 m-2 text-md font-bold hover:text-blue-800 ";
        return (
            <span className= {kalar}>{name}</span>
            
    
        );
    }
    
    
    function Navbar (){
        return (
            <div className="flex flex-row w-full mt-2 ml-5 justify-center bg-white">
                
                <Menu name = 'সর্বশেষ'/>
                <Menu name = 'বিশেষ সংবাদ'/>
                <Menu name = "রাজনীতি"/>
                <Menu name = "করোনাভাইরাস"/>
                <Menu name = 'বাংলাদেশ'/>
                <Menu name = 'বিশ্ব'/>
                <Menu name = 'বাণিজ্য'/>
                <Menu name = 'মতামত'/>
                <Menu name = 'খেলা'/>
                <Menu name = 'বিনোদন'/>
                <Menu name = 'চাকরি' />
                <Menu name = 'জীবনযাপন' />
            </div>
           
        )
    };
<hr></hr>
export default Navbar;