
import Nav from '../Nav/Index'
import './Style.css'

export default function Footer() {
  return (
        <>
        
        <footer className=" flex  flex-row w-screen  mb-auto px-48 items-center py-10 justify-between pr-4 bg-fuchsia-600 ">
              <p className="mt-4 ml-4 text-sm text-right text-white lg:text-right lg:mt-0">
                (C) 2023. Todos los derechos reservados
              </p>
      

            <div className="flex text-white pr-48">
              <Nav /> 
    
            </div>

          
        </footer>
        </>
  )
}
