import React, { useContext } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import ToggleButton from '../ToggleSwitch/ToggleButton'
import { ThemeToggleContext } from '../Theme/ThemeToggle'
import logo from '../../assets/avvic_logo.png'


const Navbar = () => {
    const { theme } = useContext(ThemeToggleContext);
    return (
      <header className={`navbar ${theme}`}>

        <img src={logo} alt="" />

        <aside>
          <NavItems />
          <ToggleButton />
        </aside>

      </header>
    );
  };

function NavItems() {
    return(
        <nav>
            <Link to='/' className='link'>Features</Link>
            <Link to='/' className='link'>Business</Link>
            <Link to='/' className='link'>Help</Link>
            <Link to='/' className='link'>Company</Link>

            <button type='submit'>Get started</button>
        </nav>
    )
}

export default Navbar