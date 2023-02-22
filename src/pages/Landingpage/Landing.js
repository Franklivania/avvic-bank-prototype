import React, { useContext } from 'react';
import { ThemeToggleContext } from '../../components/Theme/ThemeToggle';
import Navbar from '../../components/Navbar/Navbar';
import './Landing.scss';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import Start from '../../components/Start/Start';

const Landing = () => {
  const { theme } = useContext(ThemeToggleContext);

  return (
    <div className={`landing ${theme}`}>
      <Navbar />
      <Hero />
      <Services />
      <Start /> 
    </div>
  );
};

export default Landing