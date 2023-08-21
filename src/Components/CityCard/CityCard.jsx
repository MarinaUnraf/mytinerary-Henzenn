import {Link} from "react-router-dom"



function CityCard({city, country, urlimage, _id}) {

 

  return (
    <>
        <div className="rounded-2xl w-72 aspect-square bg-base-100 shadow-xl py-2 mx-3" id={_id}>
            <img className="rounded-t-2xl aspect-square w-72" src= {urlimage}  />
             <div className="mt-3 mx-auto pl-3 text-left">
                <h2 className="font-bold text-lg text-fuchsia-600">{city} </h2>
                <p className="mb-3">{country}</p>
                 <div className="flex justify-end mr-5 pt-2">
                    <Link to={`/cities/${_id}`}>
                     <button className="bg-fuchsia-600 hover:bg-fuchsia-400 text-white font-bold py-2 px-4 border-b-4 border-fuchsia-700 hover:border-fuchsia-600 rounded my-2" href=""> View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default CityCard