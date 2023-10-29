import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Dropdown from './Dropdown'

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    const onMouseleave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }
    return (
        <>
        <nav className='navbar'>
            <Link to='/home' className='navbar-logo'>
                CESA
                <i className='fab fa-firstdraft' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>                
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseleave}>
                    <Link className='nav-links' onClick={closeMobileMenu}>
                        Cadastros <i className='fas fa-caret-down' />
                    </Link>
                    {dropdown && <Dropdown />}
                </li>
                <li className='nav-item'>
                    <Link to='/pedagogia' className='nav-links' onClick={closeMobileMenu}>
                        Pedagogia
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/financeiro' className='nav-links' onClick={closeMobileMenu}>
                        Financeiro
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/relatorios' className='nav-links' onClick={closeMobileMenu}>
                        Relátorios
                    </Link>
                </li>
            </ul>
        </nav>
    </>
    );
}