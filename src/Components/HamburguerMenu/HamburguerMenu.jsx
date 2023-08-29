import  { useState } from 'react';
import Anchor from '../Anchor/Anchor';
import Button from '../Button/Button';


const HamburgerMenu = () => {

    let data = [
        {href:'/', content: 'Home'},
        {href:'/Cities', content: 'Cities'},
        
]



  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className='text-3xl text-white space-x-2 md:hidden cursor-pointer justify-end flex-row-reverse'>
                     &#9776;

                  </button>
      {isOpen && (
        <div className="lg:hidden  flex-col  flex relative top-0 left-0  text-left bg-fuchsia-300 p-3 gap-2 rounded-2xl">
          {/* Your menu links here */}
          { data.map((each, index )=> (<Anchor key={index} href={each.href} content={each.content} />))}
          <Button/>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
