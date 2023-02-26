import React, { useContext, useState, useEffect } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import ToggleButton from '../ToggleSwitch/ToggleButton'
import { ThemeToggleContext } from '../Theme/ThemeToggle'
import logo from '../../assets/avvic_logo.png'


const Navbar = () => {
    const { theme } = useContext(ThemeToggleContext);

    const handleToggle = {
        
    }

    return (
      <header className={`navbar ${theme}`}>

        <a href="https://avvicgroup.com/" target='_blank'><img src={logo} alt="" /></a>

        <aside>
          <NavItems />
          {/* <ToggleButton /> */}
        </aside>

      </header>
    );
  };

function NavItems() {
  const [open, setOpen] = useState(false);

  const handleOutsideClick = (event) => {
    if (event.target.closest('.mobile') || event.target.closest('.mobilenav')) {
      return;
    }

    setOpen(false);
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    }
  }, []);


    return(
        <>
            <nav className='main'>
                <Link to='/' className='link'>Features</Link>
                <Link to='/' className='link'>Business</Link>
                <Link to='/' className='link'>Help</Link>
                <Link to='/' className='link'>Company</Link>

                <button type='submit'>Get started</button>
            </nav>

            <button className="mobile" onClick={() => setOpen(!open)}>
              <i className={`fa-solid fa-${open ? 'times' : 'ellipsis-vertical'} fa-2x`}></i>
            </button>
            {
              open && (
                <nav className={open ? 'mobilenav show' : 'mobilenav'}>
                  <Link to='/' className='link'>Features</Link>
                  <Link to='/' className='link'>Business</Link>
                  <Link to='/' className='link'>Help</Link>
                  <Link to='/' className='link'>Company</Link>

                  <button type='submit'>Get started</button>
                </nav>
              )
            }
        </>
    )
}

export default Navbar