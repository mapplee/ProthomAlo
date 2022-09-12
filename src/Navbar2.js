function Menu({name}){
    const kalar = "p-1 m-2 text-md font-bold hover:text-blue-800 ";
    return (
        <span className= {kalar}>{name}</span>
        

    )
}

const names = [
                'সর্বশেষ', 
                'বিশেষ সংবাদ', 
                'রাজনীতি', 
                'করোনাভাইরাস', 
                'বাংলাদেশ', 
                'বিশ্ব', 
                'বাণিজ্য', 
                'মতামত', 
                'খেলা', 
                'বিনোদন', 
                'চাকরি', 
                'জীবনযাপন'
            ];

const topNavbar = names.map(z => <Menu name={z}/>);

function Navbar2 (){
    return (
        <div className="flex flex-row w-full mt-2 ml-5 justify-center bg-white">
            
            {topNavbar}
            
        </div>
       
    )
};
<hr></hr>
export default Navbar2;