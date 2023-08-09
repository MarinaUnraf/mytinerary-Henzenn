import "./Style.css"




function HeroOne() {


  return (
   <>
         <div className="container mt-20 px-4 pt-10  mx-auto  flex justify-center content-center">
            <div className="basis-1/2 space-y-10 ">
              <h1 className=" text-fuchsia-700 mb-16 text-5xl font-black  ">Find the perfect destination</h1>
                <p className=" text-left ">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                <button className=" bg-fuchsia-600 hover:bg-fuchsia-400 text-white font-bold py-2 px-4 border-b-4 border-fuchsia-700 hover:border-fuchsia-600 rounded" href=""> View More</button>
            </div>
            <div className="basis-1/2  flex justify-center">
             <img src="/image-alt.svg" className="justify-center" width="300" height="200"  />
            </div>
         </div>

          <div className="container my-2  pt-6  mx-auto  flex content-center justify-center ">
                <div className="relative shadow-md font-bold my-5 py-5 px-10 text-white cursor-pointer bg-fuchsia-600 hover:bg-fuchsia-500 rounded-full text-xl text-center w-auto ">
            <span className="absolute shadow-2xl h-6 w-6 right-0 top-0 animate-ping inline-flex rounded-full h-6 w-6 bg-fuchsia-400">
            </span>
            Go to Cities!
          </div>
          </div>
   </> 
  
  )
}

export default HeroOne 