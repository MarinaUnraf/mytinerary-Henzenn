import "./Style.css"
import CallButton from '../CallButton/callButton';



function HeroOne() {


  return (
   <>
         <div className="container mt-20 pl-4  mx-auto w-3/4  flex justify-center content-center rounded-2xl shadow-2xl">
            <div className="basis-1/2 space-y-10 ">
              <h1 className=" text-fuchsia-700 mb-16 text-5xl font-black  ">Find the perfect destination</h1>
                <p className=" text-left pb-5">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                {/* <button className=" bg-fuchsia-600 hover:bg-fuchsia-400 text-white font-bold py-2 px-4 border-b-4 border-fuchsia-700 hover:border-fuchsia-600 rounded" href=""> View More</button> */}
            </div>
            <div className="basis-1/2  flex justify-end ">
             <img src="/tokyo.jpg" className=" flex   w-full aspect-square object-fit rounded-r-2xl pl-3 "  />
            </div>
         </div>

          <div className="container my-2  pt-6  mx-auto  flex content-center justify-center ">
                <CallButton />
            
          </div>
   </> 
  
  )
}

export default HeroOne 