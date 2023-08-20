import { useState, useEffect } from 'react';

import {HiChevronLeft,HiChevronRight } from "react-icons/hi"



const ImageCarousel = () => {
  


  const handleBack = ()=>{

  }

  const handleNext = ()=>{
    
  }

  return (
          <>
          <div className="overflow-hidden relative">
              <div className='flex'>

                
              </div>
            <div className="relative  flex flex-row justify-between mx-auto">
              <button   className="top-1/2 text-fuchsia-700" onClick={handleBack}>
              <HiChevronLeft size ={70}/>
              </button>
            
              <button className="top-1/2  text-fuchsia-700" onClick={handleNext}>
                <HiChevronRight size ={70} />
              </button>
            </div>
        </div>
          </>

  );
};

export default ImageCarousel;
