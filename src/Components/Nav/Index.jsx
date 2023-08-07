import Anchor from '../Anchor/Anchor'

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
            {/* the Key value is to generate an array index to iterate in the map function */}
            {
            data.map((each, index )=> (<Anchor key={index} href={each.href} content={each.content} />))}
      
            
      </nav>
    </>
  )
}
