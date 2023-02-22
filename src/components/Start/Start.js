import React, { useContext } from 'react'
import './Start.scss'
import StartItems from './start.json'
import { ThemeToggleContext } from '../Theme/ThemeToggle'

const Start = () => {
    const { theme } = useContext(ThemeToggleContext)

  return (
    <section className={`start ${theme}`}>
        <div className="top">
            <h1>It takes seconds to start with us</h1>
            <p>We have special tailored services to meet the best of your needs</p>
        </div>

        <div className="bottom">
            {
                StartItems && StartItems.map( start => {
                    return(
                        <div className="card" key={ start.id }>
                            <h2>{start.heading}</h2>
                            <img src={ start.image } alt="" />
                            <p>{start.body}</p>
                            <small>{start.quote}</small>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Start