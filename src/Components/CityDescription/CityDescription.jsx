import { Link as Backlink } from "react-router-dom"

function CityDescription({cityImage, cityName, CityDesc}) {

  return (
    <div className="flex flex-col mx-auto  mt-28 space-y-2 items-center ">
    <img  className="aspect-square w-1/2 rounded-2xl" src={cityImage} />
    <h2 className="font-bold text-fuchsia-700">{cityName} </h2>
    <p>{CityDesc}</p>
    <Backlink to={'/cities'}>
    <button className="bg-fuchsia-600 hover:bg-fuchsia-400 text-white font-bold py-2 px-4 border-b-4 border-fuchsia-700 hover:border-fuchsia-600 rounded my-2" href=""> Back to Cities</button>

    </Backlink>
</div>
  )
}

export default CityDescription