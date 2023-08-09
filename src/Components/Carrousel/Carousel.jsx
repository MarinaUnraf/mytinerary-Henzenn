import './Style.css'
import CarrouselSlide from '../CarouselSlide/CarrouselSlide'
import {HiChevronLeft,HiChevronRight } from "react-icons/hi"


function CarouselCustom() {



  return (
    <div className='flex flex-row  w-3xl px-4 justify-center content-center mx-auto space-x-5   text-8xl text-fuchsia-600'>
        <button><HiChevronLeft/></button>
        <CarrouselSlide/>
        
        <button><HiChevronRight/></button>
    </div>
  )
}

export default CarouselCustom