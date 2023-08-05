import Nav from '../Nav/Index'
import './Style.css'

export default function Header() {
  return (
    <>
    <header className="header">
      <h1 className='text-3xl font-black' >MyTinerary</h1>
      <Nav />
    </header>
    </>
  )
}

