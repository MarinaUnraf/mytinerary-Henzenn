import axios from "axios";
import { useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link as Backlink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import itinerariesActions from '../../Redux/actions/itineraries.js';
import citiesActions from "../../Redux/actions/cities";


import CityDescription from "../../Components/CityDescription/CityDescription";
import Itinerary from "../../Components/Itinerary/Itinerary";


function CityDetail() {
  let { id } = useParams();

 

  const itinerariesInStore = useSelector(store => store.itinerariesReducer.itineraries)
  const cityInStore = useSelector(store => store.citiesReducer.cities)
  console.log(cityInStore);
  
 
  console.log(itinerariesInStore.itineraries);
  
  const dispatch = useDispatch()
  const citydispatch = useDispatch()
  useEffect(() => {
    axios("http://localhost:3000/api/city/" + id)
      .then((response) => {
        citydispatch(citiesActions.get_city(response.data.city))
      })
      .catch((error) => {
        console.log(error);
      });
  
    dispatch(itinerariesActions.get_itineraries(id));
  
    // Return a cleanup function to reset itineraries when unmounting
    return () => {
      dispatch(itinerariesActions.reset_itineraries());
    };
  }, []);
  
  return (
    <>
      <div className=" px-4   mx-auto  flex  flex-col justify-end">
        <CityDescription
          key={cityInStore._id}
          cityImage={cityInStore.urlimage}
          cityName={cityInStore.name}
          CityDesc={cityInStore.description}
        />

        {/* itineraries section */}
        <div className="container mx-auto p-4 mt-5 ">
          {console.log()}
          {itinerariesInStore.length > 1 ? (
            itinerariesInStore.map((itinerary, index) => (
              <Itinerary key={index} itinerary={itinerary} />
            ))
          ) : (
            <h2 className="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400 text-center my-5 bg-white rounded-md shadow-lg p-5">
              {" "}
              This city doesn´t have itineraries yet
            </h2>
          )}
        </div>

        {/* back to Cities Button */}
        <div className="mx-auto justify-center">
          <Backlink to={"/cities"}>
            <button className="bg-fuchsia-600 hover:bg-fuchsia-400 text-white font-bold py-2 px-4 border-b-4 border-fuchsia-700 hover:border-fuchsia-600 rounded my-2 justify-center">
              {" "}
              Back to Cities
            </button>
          </Backlink>
        </div>
      </div>
    </>
  );
}



export default CityDetail;
