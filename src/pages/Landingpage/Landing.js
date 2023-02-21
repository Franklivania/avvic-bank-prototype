import React, { useContext } from 'react';
import { ThemeToggleContext } from '../../components/Theme/ThemeToggle';
import Navbar from '../../components/Navbar/Navbar';
import './Landing.scss';

const Landing = () => {
  const { theme } = useContext(ThemeToggleContext);

  return (
    <div className={`landing ${theme}`}>
      <Navbar />
    </div>
  );
};

export default Landing