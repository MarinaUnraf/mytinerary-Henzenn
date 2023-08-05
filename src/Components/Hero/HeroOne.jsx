import "./Style.css"




function HeroOne() {


  return (
   <>
         <div className="container my-20 px-4 pt-10  mx-auto  flex justify-center content-center">
            <div className="basis-1/2 space-y-10 ">
              <h1 className=" text-fuchsia-700 mb-16 text-5xl font-black  ">Find the perfect destination</h1>
                <p className=" text-left ">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                <button className=" bg-fuchsia-600 hover:bg-fuchsia-400 text-white font-bold py-2 px-4 border-b-4 border-fuchsia-700 hover:border-fuchsia-600 rounded" href=""> View More</button>
            </div>
            <div className="basis-1/2  flex justify-center">
             <img src="/image-alt.svg" className="justify-center" width="300" height="200"  />
            </div>
         </div>

   {/*  <div className="">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="/image-alt.svg" className="d-block mx-lg-auto img-fluid style1" width="300" height="200"  />
       </div>
      <div className="col-lg-6 gap-40">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Find the perfect destination</h1>
        <p className="lead gap-40">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
        <div className="d-grid gap-40 d-md-flex justify-content-md-start">
        <button type="button" className="btn btn-primary btn-lg px-4">View More</button>
        </div>
      </div>
    </div> */}
   </> 
  
  )
}

export default HeroOne  