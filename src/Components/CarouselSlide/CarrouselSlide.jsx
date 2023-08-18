import { useState, useEffect } from 'react';
import CarrouselPic from '../CarrouselPic/CarrouselPic'
import {HiChevronLeft,HiChevronRight } from "react-icons/hi"



const ImageCarousel = () => {
  


  const handleBack = ()=>{

  }

  const handleNext = ()=>{
    
  }

  return (
    <div className="relative  flex flex-row">
      <button className="absolute left-0 top-1/2 " onClick={handleBack}>
       <HiChevronLeft/>
      </button>
     
      <button className="absolute right-0 top-1/2 " onClick={handleNext}>
        <HiChevronRight />
      </button>
    </div>
  );
};

export default ImageCarousel;
