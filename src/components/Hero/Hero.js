import React, { useContext } from 'react'
import { ThemeToggleContext } from '../Theme/ThemeToggle'
import './Hero.scss'
import banking from '../../assets/banking.png'

const Hero = () => {
    const { theme } = useContext(ThemeToggleContext)

  return (
    <main className={`hero ${theme}`}>
        <div className='left'>
            <h1>Revolutionalise Banking for yourself</h1>
            
            <h3>Let us guide you to the future of digital banking</h3>

            <p>By providing near gun speed transaction prospects, we are
                able to facilitate easier and faster money management with
                the click of a button.
                
                <br />

                As a bonus, you enjoy no transaction charges whether you send or receive
            </p>
        </div>

        <div className="right">
            <img src={banking} alt="" title='Banking' />
        </div>
    </main>
  )
}

export default Hero