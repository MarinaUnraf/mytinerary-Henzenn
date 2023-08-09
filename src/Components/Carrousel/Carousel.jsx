import './Style.css'
import CarrouselSlide from '../CarouselSlide/CarrouselSlide'
import {HiChevronLeft,HiChevronRight } from "react-icons/hi"
import { useState, useEffect } from 'react'

 
 function CarouselCustom() {
  
    let [slide, setSlide] = useState(1)    
  
       
  
  const handlerNext = () => {
          if( slide != 2){
            setSlide( slide + 1)
            console.log(slide);
          }
    
      }
      const handlerBack = ()=>{
              if(slide != 0){
                setSlide(slide- 1)
                console.log(slide);
              }
      }  

  return (
    <>
    
    <div className='flex flex-row  w-3xl px-4 justify-center content-center mx-auto space-x-5   text-8xl text-fuchsia-600 '>
        <button onClick={()=> handlerBack()}><HiChevronLeft/></button>
            
          <CarrouselSlide />
        
        <button onClick={()=> handlerNext()}><HiChevronRight/></button>
    </div>
    
    </>
  )
}

export default CarouselCustom