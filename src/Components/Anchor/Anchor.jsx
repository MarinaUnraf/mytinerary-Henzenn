import './Style.css'
import {Link as AnchorLink} from 'react-router-dom'

export default function Anchor({href, content}) {
  return (
    
    <>
        {  /* Creating the structure of the anchor */}
        <AnchorLink to={href}>
          {content}
        </AnchorLink>

    </>
  )
}
