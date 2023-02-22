import React, {useContext } from 'react'
import './Services.scss'
import Service from './service.json'
import mobile from'../../assets/mobile.png'
import { ThemeToggleContext } from '../Theme/ThemeToggle'

const Services = () => { 
    const { theme } = useContext(ThemeToggleContext)

  return (
    <section className={`services ${theme}`}>
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
  )
}

export default Services