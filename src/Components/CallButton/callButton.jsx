import { Link } from "react-router-dom"

function callButton() {
  return (
    <>      <Link to={"/Cities"}>

             <div className="relative shadow-md font-bold my-5 py-5 px-10 text-white cursor-pointer bg-fuchsia-600 hover:bg-fuchsia-500 rounded-full text-xl text-center w-auto ">
            <span className="absolute shadow-2xl  right-0 top-0 animate-ping inline-flex rounded-full h-6 w-6 bg-fuchsia-400">
            </span>
            Go to Cities!
          </div>
            </Link>
    </>
  )
}

export default callButton