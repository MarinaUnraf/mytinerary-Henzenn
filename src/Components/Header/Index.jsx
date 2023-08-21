import Nav from '../Nav/Index'
import Button from '../Button/Button'
import './Style.css'

export default function Header() {
  return (
    <>
    <header className="header bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-xl">
      <h1 className="text-3xl  text-fuchsia-900 font-extrabold" >MyTinerary</h1>
      <div className='flex flex-row space-x-6'>
          <Nav />
          <Button />
        
      </div>
    </header>
    </>
  )
}

