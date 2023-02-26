import React, {useContext } from 'react'
import './Services.scss'
import Service from './service.json'
import mobile from'../../assets/mobile.png'
import apple from'../../assets/appleStore.svg'
import play from'../../assets/playStore.svg'
import { ThemeToggleContext } from '../Theme/ThemeToggle'

const Services = () => { 
    const { theme } = useContext(ThemeToggleContext)

  return (
    <section className={`service ${theme}`}>
        <h1>Features</h1>
        <section className={`services`}>
            <img src={mobile} alt="" title='Mobile phone' />

            <aside>
                {
                    Service && Service.map( service => {
                        return(
                            <div className="box" key={ service.id }>
                                <i className={service.icon}></i>
                                <p>{service.title}</p>
                            </div>
                        )
                    })
                }
            </aside>
        </section>
        <div className="buttons">
            <button type="submit">More Features</button>
            <a href=""><img src={apple} alt="" /></a> 
            <a href=""><img src={play} alt="" /> </a>
        </div>
    </section>
  )
}

export default Services