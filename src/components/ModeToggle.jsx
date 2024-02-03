import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';

const ModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      id='mode'
      type='button'
      onClick={() => setDarkMode(!darkMode)}
    >
      Mode
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ModeToggle;
