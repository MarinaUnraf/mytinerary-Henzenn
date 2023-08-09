import CarrouselPic from "../CarrouselPic/CarrouselPic"

function CarrouselSlide() {

      let dataPic = [
              {src:'/pic1.png', content:'Pic1'},
              {src:'/pic2.jpeg', content:'Pic2'},
              {src:'/pic3.jpeg', content: 'Pic3'},
              {src: '/pic1.png', content: 'Pic4'},
]
  
  return (
   <>
      
      <div className="grid  grid-cols-2 flex-wrap gap-3  justify-center content-center max-w-3xl max-h-3xl">
            
        {dataPic.map((each,index)=> (<CarrouselPic key={index} src={each.src} content={each.content} />))}

      </div> 
      
   </>
  )
}

export default CarrouselSlide