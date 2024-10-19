// src/App.js
import React from 'react';
import Weather from './components/Weather'; // Importing the Weather component
import './App.css'; // If you have global styling for your app

function App() {
  return (
    <div className="App">
      <Weather /> {/* Rendering the Weather component */}
    </div>
  );
}

export default App;
