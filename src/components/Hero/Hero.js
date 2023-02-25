import React, { useContext, useState, useEffect } from 'react'
import { ThemeToggleContext } from '../Theme/ThemeToggle'
import './Hero.scss'
import banking from '../../assets/banking.png'
import digital from '../../assets/digital.svg'
import computer from '../../assets/computer.svg'

const Hero = () => {
    const { theme } = useContext(ThemeToggleContext)

    const slides = [
        {
            id: 1,
            image: banking,
            title: "banking"
        },
        {
            id: 2,
            image: digital,
            title: "Digital"
        },
        {
            id: 3,
            image: computer,
            title: "Digital banking"
        }
    ]

    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentSlide((currentSlide + 1) % slides.length);
        }, 8000);
    
        return () => clearInterval(intervalId);
    }, [currentSlide, slides.length]);


  return (
    <main className={`hero ${theme}`}>
        <div className='left'>
            <h1>Revolutionalise Banking for yourself</h1>
            
            <h3>Let us guide you to the future of digital banking</h3>

            <p> 
                Fast transactions ,Zero Charges and money management with the click of a button.
            </p>

            <button type='submit'> Get started</button>
        </div>

        <div className="right">
            {
                slides.map((slide, index) => (
                    <img 
                        key={slide.id} 
                        src={slide.image} 
                        title={slide.title}
                        style={{
                            opacity: currentSlide === index ? 1 : 0,
                        }}
                    />
                ))
            }
        </div>
    </main>
  )
}

export default Hero