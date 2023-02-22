import React, { useContext } from 'react';
import { ThemeToggleContext } from '../../components/Theme/ThemeToggle';
import Navbar from '../../components/Navbar/Navbar';
import './Landing.scss';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import Start from '../../components/Start/Start';
import Connect from '../../components/Connect/Connect';

const Landing = () => {
  const { theme } = useContext(ThemeToggleContext);

  return (
    <div className={`landing ${theme}`}>
      <Navbar />
      <Hero />
      <Services />
      <Start /> 
      <Connect />
    </div>
  );
};

export default Landing