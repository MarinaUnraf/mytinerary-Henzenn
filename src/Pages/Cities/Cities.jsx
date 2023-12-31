
import { useEffect, useRef } from 'react';
import CityCard from '../../Components/CityCard/CityCard';

/* import { getAllCities } from "../../Services/cityServices"; */
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import citiesActions from '../../Redux/actions/cities';



function Cities() {

   

     
      const inputSearch = useRef(null)
    
     let citiesInStore =useSelector(store => store.citiesReducer.cities)
     //console.log(citiesInStore);

    const dispatch= useDispatch()
    
    useEffect(()=>{
        axios.get("http://localhost:3000/api/cities")
          .then((response) => {
            dispatch(citiesActions.get_cities(response.data))
          })

     
      
     
      
      
    },[] )
    
 
    const handleInput = ()=>{
      const search =inputSearch.current.value;
      let query = `?`;
      if (search){
        query+= "name="+ search;
      } 
      axios.get("http://localhost:3000/api/cities"+query)
      .then((queryResponse)=>{
          console.log("queryResponse",queryResponse);


          dispatch(citiesActions.get_cities(queryResponse.data))
      })
      
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

        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  shrink-0 gap-3">
        
        {console.log(citiesInStore)}
          {
            citiesInStore.length>0 ?(
            citiesInStore.map((item, index) => (       
              
                          <CityCard key={index} city={item.name} country={item.country} urlimage={item.urlimage} cityId={item._id}  />
                          
            ))
            ):
            (<h2> No results found, please try again</h2>)

          } 
       
        
        </div>
        
        
        
        

        </div>
        
      
    
    </>
  )
  
}

export default Cities