import Nav from '../Nav/Index'
import Button from '../Button/Button'
import './Style.css'

export default function Header() {
  return (
    <>
    <header className="header">
      <h1 className='text-3xl font-black' >MyTinerary</h1>
      <div className='flex flex-row space-x-6'>
          <Nav />
          <Button />
        
      </div>
    </header>
    </>
  )
}

