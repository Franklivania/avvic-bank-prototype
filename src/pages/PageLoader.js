import React, { useState, useEffect } from 'react';
import './PageLoader.scss';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let interval;
    if (isLoading) {
      interval = setInterval(() => {
        const logo = document.querySelector('.page-loader .logo');
        if (logo.classList.contains('dim')) {
          logo.classList.remove('dim');
          logo.classList.add('brighten');
        } else {
          logo.classList.remove('brighten');
          logo.classList.add('dim');
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      setIsLoaded(true);
      setTimeout(() => {
        setIsLoaded(false);
      }, 1000);
    }
  }, [isLoading]);

  return (
    <div className={`page-loader ${isLoading ? 'show' : 'hide'}`}>
      <div className={`upper-half ${isLoaded ? 'move-up' : ''}`}></div>
      <div className={`lower-half ${isLoaded ? 'move-down' : ''}`}></div>
      <div className={`logo ${!isLoading ? 'grow hide' : ''}`}></div>
    </div>
  );
}

export default PageLoader;
