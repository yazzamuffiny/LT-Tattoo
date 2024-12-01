import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import useFetchLogo from '../../hooks/useFetchLogo';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_WP_BASEURL


const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const logoUrl = useFetchLogo();




    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    }

    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    }
  return (
    <header>
        <nav className={`navbar ${isOpen ? 'menu-open' : ''}`} id='navBar'>

        {/* hamburger */}
        <div className='menu-icon' onClick={toggleMenu}>
          <div className={`bar bar1 ${isOpen ? 'toggle' : ''}`}></div>
          <div className={`bar bar2 ${isOpen ? 'toggle' : ''}`}></div>
          <div className={`bar bar3 ${isOpen ? 'toggle' : ''}`}></div>
        </div>  

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li id='mobileLogo'>
                <NavLink
                    to='/'
                    onClick={closeMenu}
                    className='nav-logo-container'
                >
                    <div className='nav-logo'>
                    <img src={logoUrl || './logo.png'} alt="LT Tattoo" />
                    </div>
                    
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/bookings'
                    onClick={closeMenu}
                    className={({isActive}) => (isActive ? 'active-link' : '')}
                >
                    Bookings
                    
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/store'
                    onClick={closeMenu}
                    className={({isActive}) => (isActive ? 'active-link' : '')}
                >
                    Store
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/vouchers'
                    onClick={closeMenu}
                    className={({isActive}) => (isActive ? 'active-link' : '')}
                >
                    Vouchers
                </NavLink>
            </li>
            <li id='desktopLogo'>
                <NavLink
                    to='/'
                    onClick={closeMenu}
                    className='nav-logo-container'
                >
                    <div className='nav-logo'>
                    <img src={logoUrl || './logo.png'} alt="LT Tattoo" />
                    </div>
                    
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/reviews'
                    onClick={closeMenu}
                    className={({isActive}) => (isActive ? 'active-link' : '')}
                >
                    Reviews
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/Contact'
                    onClick={closeMenu}
                    className={({isActive}) => (isActive ? 'active-link' : '')}
                >
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/about'
                    onClick={closeMenu}
                    className={({isActive}) => (isActive ? 'active-link' : '')}
                >
                    About
                </NavLink>
            </li>
        </ul>
        </nav>
    </header>
  )
}

export default NavBar
