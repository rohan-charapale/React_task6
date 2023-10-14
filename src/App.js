// src/App.js
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import SocialLinks from './components/SocialLinks';
import Skills from './components/Skills';
import Education from './components/Education';
import './App.css';

function App() {
  return (
    <div className="App">

    <Header className="header"></Header>
    <AboutMe></AboutMe>
    <Skills></Skills>
    <Education></Education>
    <SocialLinks></SocialLinks>

    </div>
  );
}

export default App;
