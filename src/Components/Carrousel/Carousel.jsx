import './Style.css'
import { useState, useEffect } from 'react';

import {HiChevronLeft,HiChevronRight } from "react-icons/hi"
import CarrouselSlide from '../CarouselSlide/CarrouselSlide'


 function CarouselCustom() {
     
     
     let [iteration, setIteration] = useState(0)



     const handleBack = ()=>{
               if(iteration !=0){
                    setIteration(iteration-1)
               } else{
                    setIteration(2)
               }
     }
   
     const handleNext = ()=>{
       if(iteration != 2){
          setIteration(iteration+1)
       } else {
          setIteration(0)
       }
     }  

     useEffect(()=>{
          let timeSlide = setInterval(()=>
          {handleNext()}, 3000 )
          return ()=>{
               clearInterval(timeSlide)
          }
     })

  
  
  return (
          <div className=" relative">
              <div className='flex'>

                
              </div>
            <div className=" flex flex-row justify-evenly mx-auto">
              <button   className="top-1/2 text-fuchsia-700" onClick={handleBack}>
              <HiChevronLeft size ={70}/>
              </button>
              

                    <CarrouselSlide  slide={iteration}/>
               

             
              <button className="top-1/2  text-fuchsia-700" onClick={handleNext}>
                <HiChevronRight size ={70} />
              </button>
            </div>
        </div>
       )
}

export default CarouselCustom