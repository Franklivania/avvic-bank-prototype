import React, { useContext } from 'react';
import { ThemeToggleContext } from '../Theme/ThemeToggle';
import SliderButton from '../slider/SliderButton';
import './ToggleButton.scss'

function ToggleButton() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeToggleContext);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="dark-mode-toggle">
      <SliderButton isChecked={isDarkMode} handleToggle={handleToggle} />
    </div>
  );
}

export default ToggleButton;
