import "./Style.css"

function HeroOne() {
  return (
   <>

    <div className="row flex-lg-row-reverse align-items-center  heroCustom">
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
    </div>
   </> 
  
  )
}

export default HeroOne  