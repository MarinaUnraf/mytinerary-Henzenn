import Anchor from '../Anchor/Anchor'
import Button from '../Button/Button'
import './Style.css'

export default function Nav() {
  //asigning an object to the nav function
  let data = [
              {href:'#', content: 'Home'},
              {href:'#', content: 'Cities'},
              
  ]
  
  return (
    <>
     <nav className='navBar'>
            {
            data.map((each)=> (<Anchor href={each.href} content={each.content} />))}
      <Button />
            
      </nav>
    </>
  )
}
