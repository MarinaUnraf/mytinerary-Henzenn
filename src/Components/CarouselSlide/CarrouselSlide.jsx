import CarrouselPic from "../CarrouselPic/CarrouselPic" 
import DB from '../../DataBase/data.json'


function CarrouselSlide() {
      
     let slide = 0
      let dataPic = []
      let picsPerSlice = 4

      let sliceInfour = () =>{
         for (let index = 0; index < DB.length; index =+4) {
          
          
           let chunk = DB.slice( slide * picsPerSlice, (slide + 1)* picsPerSlice)
           dataPic.push(chunk)
         } 
        console.log(dataPic);
        
       
       
          
         
      }
      sliceInfour()
      
                
  return (
   <>
      
      <div className="grid  grid-cols-2 flex-wrap gap-3  justify-center content-center max-w-3xl max-h-3xl">
            
        {dataPic.map((each,index)=> (<CarrouselPic key={index} imagen={each.imagen} ciudad={each.ciudad} />))        }
        

      </div> 
      
   </>
  )
}

export default CarrouselSlide