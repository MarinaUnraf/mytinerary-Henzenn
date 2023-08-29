
import HamburgerMenu from '../HamburguerMenu/HamburguerMenu'
import Nav from '../Nav/Index'
import './Style.css'

export default function Footer() {
  return (
        <>
        
        <footer className=" flex  flex-row w-screen  mb-auto px-48 items-center py-10 justify-between pr-4  bg-gradient-to-r from-violet-500 to-fuchsia-500">
              <p className="mt-4 ml-4 text-sm text-right text-white lg:text-right lg:mt-0">
                (C) 2023. All rights reserved
              </p>
      

            <div className="flex text-white pr-48 space-x-2 ">
             
             <HamburgerMenu/>
              <Nav /> 
    
            </div>

          
        </footer>
        </>
  )
}
