
import CarouselCustom from '../../Components/Carrousel/Carousel'
import HeroOne from '../../Components/Hero/HeroOne'


export default function Index() {
  return (
    <>
     
       <HeroOne />
       <div className='container mt-28 flex-col justify-center align-center mx-auto space-y-5 '>
          <h1 className='text-center text-5xl font-bold text-fuchsia-600'> Popular in MyTinerary</h1>
          <CarouselCustom />
       </div>
       
    </>
  )
}
