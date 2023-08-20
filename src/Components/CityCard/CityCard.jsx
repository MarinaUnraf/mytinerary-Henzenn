import {Link} from "react-router-dom"
import data from "../../DataBase/data.json"

function CityCard() {

  let chinaCard = data.find(china => china.id === 9)

  return (
    <>
        <div className="rounded-2xl w-96 bg-base-100 shadow-xl py-2">
            <img className="rounded-t-2xl" src= {chinaCard.imagen} alt="Shoes" />
             <div className="mt-3 mx-auto pl-3 text-left">
                <h2 className="font-bold text-lg text-fuchsia-600">{chinaCard.ciudad} </h2>
                <p className="mb-3">The forbiden city</p>
                 <div className="flex justify-end mr-5 pt-2">
                    <Link to={`/cities/${chinaCard.id}`}>
                     <button className="bg-fuchsia-600 hover:bg-fuchsia-400 text-white font-bold py-2 px-4 border-b-4 border-fuchsia-700 hover:border-fuchsia-600 rounded my-2" href=""> View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default CityCard