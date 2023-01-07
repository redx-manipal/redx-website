import React, { useState } from 'react'
import '../styles/Navbar.scss';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };
    
    return(
        < >
        {dropdown?"":""}
            <nav className='navbar'>
                <a href="/" className='navbar-logo' onClick={closeMobileMenu}>
                    <img src="RedX.png" alt="redx" width="70"/>
                </a>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href="/AboutUs.jsx" className='nav-links' onClick={closeMobileMenu}>
                            About
                        </a>
                    </li>
                    <li
                         className='nav-item'
                         onMouseEnter={onMouseEnter}
                         onMouseLeave={onMouseLeave}
                    >
                        <a href="/Team.jsx" className='nav-links' onClick={closeMobileMenu}>
                            Team
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="/Partners.jsx" className='nav-links' onClick={closeMobileMenu}>
                            Partners
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="/Contact.jsx" className='nav-links' onClick={closeMobileMenu}>
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <div className='additional-menu' onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
