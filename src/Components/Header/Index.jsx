import Nav from '../Nav/Index'
import Button from '../Button/Button'
import './Style.css'

export default function Header() {
  return (
    <>
    <header className=" flex pe-16 ps-16 justify-between w-full  min-[px]:flex-col  md:w-full pb-5 pt-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-xl">
      <h1 className="text-3xl  text-fuchsia-900 font-extrabold" >MyTinerary</h1>
      <div className='flex flex-row space-x-6 items-center'>
           <button className='text-3xl text-white space-x-2 md:hidden cursor-pointer justify-center'>
              &#9776;

            </button>
          <Nav />
          <Button />
        
      </div>
    </header>
    </>
  )
}

