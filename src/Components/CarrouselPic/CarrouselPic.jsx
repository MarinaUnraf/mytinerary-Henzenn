


function CarrouselPic({ image,title,content}) {
  

  return (
    <>
          <div className="  antialiased text-gray-900">
    <div>
        
        <img src={image} alt=" random imgee" className="aspect-square w-96 object-cover object-center rounded-lg shadow-md"/>    
        
    <div className="relative px-4 -mt-16  ">
      <div className="bg-white p-6 rounded-lg shadow-lg">

        
        <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate"> {title} </h4>
    
      <div className="mt-1">
        {content}
        
      </div>

      </div>
    </div>
      
    </div>
      </div>




    
    
    
    </>
  );
}


export default CarrouselPic