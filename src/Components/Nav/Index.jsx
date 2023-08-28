import Anchor from '../Anchor/Anchor'

import './Style.css'

export default function Nav() {
  //asigning an object to the nav function
  let data = [
              {href:'/', content: 'Home'},
              {href:'/Cities', content: 'Cities'},
              
  ]
  
  return (
    <>
      <div>
           
            <nav className=' justify-center hidden font-bold md:block space-x-2 text-2xl text-white '>
                    {/* the Key value is to generate an array index to iterate in the map function */}


                    { data.map((each, index )=> (<Anchor key={index} href={each.href} content={each.content} />))}
                    
              
                    
              </nav> 
        
      </div>
    </>
  )
}
