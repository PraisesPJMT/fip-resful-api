import React, { useState } from 'react';
import Profile from './components/Profile';
import Task from './components/Task';
import ModeToggle from './components/ModeToggle';
import Notice from './components/Notice';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      id='app'
      className={darkMode ? 'dark' : ''}
    >
      <main className='dark'>
        <Profile />
        <Task />
      </main>
      <ModeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Notice mode={darkMode} />
    </div>
  );
};

export default App;
