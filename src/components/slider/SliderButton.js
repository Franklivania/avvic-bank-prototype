import React, { useContext } from 'react';
import './SliderButton.scss';
import { ThemeToggleContext } from '../Theme/ThemeToggle';

const SliderButton = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeToggleContext);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <label className="slider-button">
      <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />
      <span className="slider"></span>
    </label>
  );
};

export default SliderButton;
