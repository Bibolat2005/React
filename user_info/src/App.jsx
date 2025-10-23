import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserList from './UserList/UserList';
import UserDetail from './UserDetail/UserDetail';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      <div className="app-container">
        <header className="app-header">
          <h1>👥 Random Users Explorer</h1>
          <button onClick={toggleTheme}>
            {darkMode ? '🌙 Dark' : '☀️ Light'} Mode
          </button>
        </header>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/user/:userId" element={<UserDetail />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;