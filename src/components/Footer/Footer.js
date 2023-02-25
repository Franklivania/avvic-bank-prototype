import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
import { ThemeToggleContext } from '../Theme/ThemeToggle'
import logo from "../../assets/avvic_logo.png"

const Footer = () => {
    const { theme } = useContext(ThemeToggleContext)
  return (
    <footer className={`footer ${ theme }`}>
        <section>
            <aside>
                <a href="">Create account</a>
                <a href="">The team</a>
            </aside>

            <aside>
                <a href="">Policies</a>
                <a href="">Terms and Conditions</a>
                <a href="">Privacy</a>
            </aside>

            <aside>
                <a href="">FAQ</a>
                <a href="">Join the force</a>
                <a href="">Our Mission</a>
            </aside>

            <aside>
                <address>
                    <h1>Address</h1>
                    <p>
                        House B1, Rose Gardens Courts, <br />
                        Rangers Avenue, Enugu. Nigeria
                    </p>
                </address>

                <br />

                You can mail us at;
                <a href="mailto:info@avvicgroup.com">info@avvicgroup.com</a>
            </aside>
        </section>

        <div className="below">
            <Link to='/' className='image'><img src={logo} alt="" title='avvic logo' /></Link>

            <p>
                Avvic Banking is a subsidiary of Avvic Groups, which is aimed towards providing services <br />
                in various sectors to help solve problems and profer easier methods to go about daily businesses <br />
                without having to put you in a grind.
            </p>

            <br />

            <p>
                2023. All rights are reserved by the Avvic group, and shall not be used without express permision
            </p>
        </div>
    </footer>   
  )
}

export default Footer