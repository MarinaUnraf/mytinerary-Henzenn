
import { useState,useEffect, useRef } from 'react';
import CityCard from '../../Components/CityCard/CityCard';

import { getAllCities } from "../../Services/cityServices";


function Cities() {

   

     const [list, setList] = useState([])
      const inputSearch = useRef(null)
 
   
    useEffect(()=>{

      getAllCities()
      .then(setList)
      
     
      
      
    },[] )
    
 
    const handleInput = ()=>{
      const search =inputSearch.current.value;
      let query = `?`;
      if (search){
        query+= "name="+ search;
      } 
      getAllCities(query).then(setList)
    }

  
  return (
    <>
        <div className=" container mx-auto mt-10 flex  justify-end ">
                  
                  <div className="flex items-center">
            <div className="flex border border-fuchsia-200 rounded">
                <input 
                    onInput={handleInput}
                    ref={inputSearch}
                    type="text"
                    className="block w-full px-4 py-2 text-fuchsia-700 bg-white border rounded-md focus:border-fuchsia-400 focus:ring-fuchsia-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                {/* <button  className="px-4 text-white bg-fuchsia-600 border-l rounded ">
                    Search
                </button> */}
            </div>
        </div>

                                  </div>  
       

        
        <div className="flex mx-auto ">

        <div className="grid grid-cols-5 ">

        {list.map((item) => (       
          
                      <CityCard key={item._id} city={item.name} country={item.country} urlimage={item.urlimage} _id={item.id}/>
                      
        ))}
       
        
        </div>
        
        
        
        

        </div>
        
      
    
    </>
  )
  
}

export default Cities