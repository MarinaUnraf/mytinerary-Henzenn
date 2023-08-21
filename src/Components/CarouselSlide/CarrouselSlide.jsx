
import CarrouselPic from '../CarrouselPic/CarrouselPic';
import db from '../../DataBase/data.json'



const ImageCarousel = ({slide}) => {
  
let arrPic =[]

let sliceGroup = ()=> { 
     arrPic= db.slice(slide*4, (slide+1)*4)}
sliceGroup()



  return (
          <>
           <div className=" grid grid-cols-2 gap-20 " >
            {arrPic.map((item) =>
                  <CarrouselPic key={item.id} image={item.imagen} title={item.ciudad} content={item.pais} />
            )}
              
          </div>
          </>

  );
};

export default ImageCarousel;
