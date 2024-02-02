import './style.css';

import { Link } from 'react-scroll';
function Nav() {
  return (<>
     <div className='bg'>
      <div className='nav'>
            <ul>
      <li><Link to='home'>HOME</Link></li>
      <li><Link to='Main'>ABOUT</Link></li>
      <li><Link to='contact'>CONTACT</Link></li>
    </ul></div>
   
    </div>
    </>
    
  );
}

export default Nav;