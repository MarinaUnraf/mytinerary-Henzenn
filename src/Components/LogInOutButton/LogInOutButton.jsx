
import { useState } from 'react';
import '../Button/Style.css'
function SignOutButton() {

    const [link, setLink] = useState('/');
    const [text, setText] = useState('Logout');
  
    const handleClick = () => {
      // Check the current state and toggle the link and text accordingly
      if (link === '/') {
        setLink('/SignIn');
        setText('Login');
      } else {
        setLink('/');
        setText('Logout');
      }
    };
  
    return (
      <a className='buttonNav' href={link} onClick={handleClick}>
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.7813 5C13.7813 6.72589 12.3122 8.125 10.5 8.125C8.68783 8.125 7.21876 6.72589 7.21876 5C7.21876 3.27411 8.68783 1.875 10.5 1.875C12.3122 1.875 13.7813 3.27411 13.7813 5Z" fill="white"/>
          <path d="M3.93851 16.7652C4.00002 13.3641 6.91415 10.625 10.5 10.625C14.086 10.625 17.0001 13.3642 17.0615 16.7654C15.0641 17.6383 12.8419 18.125 10.5003 18.125C8.15851 18.125 5.9361 17.6383 3.93851 16.7652Z" fill="white"/>
        </svg>
        {text}
      </a>
    );
  
  
}

export default SignOutButton