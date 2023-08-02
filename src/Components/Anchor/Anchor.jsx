import './Style.css'

export default function Anchor({href, content}) {
  return (
    
    <>
        {  /* Creating the structure of the anchor */}
        <a href={href}>{content}</a>

    </>
  )
}
