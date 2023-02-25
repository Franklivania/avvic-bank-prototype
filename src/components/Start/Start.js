import React, { useContext, useEffect, useRef } from 'react';
import './Start.scss';
import StartItems from './start.json';
import { ThemeToggleContext } from '../Theme/ThemeToggle';

const Start = () => {
  const { theme } = useContext(ThemeToggleContext);
  const startRef = useRef(null);

  useEffect(() => {
    const slideInElements = startRef.current.querySelectorAll('.slide-in');

    const options = {
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-active');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    slideInElements.forEach(element => {
      observer.observe(element);
    });
  }, []);

  return (
    <section className={`start ${theme}`} ref={startRef}>
      <div className="top slide-in">
        <h1>It takes seconds to start with us</h1>
        <p>We have special tailored services to meet the best of your needs</p>
      </div>

      <div className="bottom">
        {StartItems && StartItems.map(start => (
          <div className="card slide-in" key={start.id}>
            <h2>{start.heading}</h2>
            <img src={start.icon} alt="" />
            <p>{start.body}</p>
            <small>{start.quote}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Start;
