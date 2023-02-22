import React, { useContext } from 'react'
import './Connect.scss'
import Connects from './connect.json'
import { ThemeToggleContext } from '../Theme/ThemeToggle'

const Connect = () => {
    const { theme } = useContext(ThemeToggleContext)

  return (
    <section className={`connect ${ theme }`}>
        <div className="wrapper">
            <div className="socials">
                {
                    Connects && Connects.map(connect => {
                        return(
                            <a href={ connect.link } className="social" key={ connect.id }>
                                <i className={ connect.icon }></i>
                            </a>
                        )
                    })
                }
            </div>

            <div className="subscribe">
                <h3>Subscribe to our newsletter</h3>
                <label htmlFor="">
                    <input type="email" name="email" id="email" />
                    <input type="submit" id='submit' value="Subscribe" />
                </label>
            </div>

        </div>
    </section>
  )
}

export default Connect