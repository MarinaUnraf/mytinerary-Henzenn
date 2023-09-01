import { HiHashtag, HiOutlineClock, HiOutlineHeart} from "react-icons/hi";
import { CiMoneyBill} from "react-icons/ci";
import Accordion from "../Acordion/Acordion";

const Itinerary = ({ itinerary }) => {
    return (
        <>
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-2xl text-center font-semibold mb-2 py-5 text-fuchsia-700">{itinerary.name}</h2>
        <p className="text-gray-600 text-center mb-3">{itinerary.description}</p>

        {/* Info section */}
            
            <div className="flex flex-row items-center justify-center pt-5 gap-16 shadow-inner">
                <div className="flex  flex-col items-center space-y-2">
                        <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" className="rounded-full h-12 w-12" alt=""/>
                        <div className="flex  flex-wrap space-y-2 text-sm text-gray-600  ">
                            <span>Leonard Krashner</span>  
                        </div>
                    
                </div>
                <div className="flex  flex-col items-center space-y-2">
                    <span className="rounded-full h-12 w-12 text-5xl text-fuchsia-500" > <HiOutlineHeart /></span>
                        
                        <div className="flex flex-col space-y-2 text-sm text-gray-600  ">
                            <span>0</span>  
                        </div>
                    
                </div>
                <div className="flex  flex-col items-center space-y-2">
                        <span className="rounded-full h-12 w-12 text-5xl text-fuchsia-500" > <HiOutlineClock/></span>
                        <div className="flex flex-col space-y-2 text-sm text-gray-600  ">
                            <span>Duration</span>  
                        </div>
                    
                </div>
                <div className="flex  flex-col items-center space-y-2">
                        
                        <div className="flex  flex-row items-start  ">
                        <span className="rounded-full h-12 w-12 text-5xl text-fuchsia-500" > <CiMoneyBill/></span>
                        <span className="rounded-full h-12 w-12 text-5xl text-fuchsia-500" ><CiMoneyBill/> </span>
                        <span className="rounded-full h-12 w-12 text-5xl text-fuchsia-500" > <CiMoneyBill/></span>     
                            
                        </div>
                        <div className="flex flex-col space-y-2 text-sm text-gray-600  ">
                            <span>Price</span>  
                        </div>
                    
                </div>
                
                 <div className="flex  flex-col items-center space-y-2">
                        
                        <div className="flex  flex-row flex-wrap items-start  ">
                        <span className="rounded-full h-12 w-12 text-5xl text-fuchsia-500" > <HiHashtag/></span>
                        <span className="rounded-full h-12 w-12 text-5xl text-fuchsia-500" > <HiHashtag/></span>
                        <span className="rounded-full h-12 w-12 text-5xl text-fuchsia-500" > <HiHashtag/></span>     
                            
                        </div>
                        <div className="flex flex-col space-y-2 text-sm text-gray-600  ">
                            <span>Hashtags</span>  
                        </div>
                    
                </div>
                 
            </div>

                


        {/* Acordion- View activities-comments */}
            <div className="flex w-auto justify-center mt-10 items-center">

                        <Accordion/>

            </div>

      </div>
        
        </>
    );
  };
  
  export default Itinerary;