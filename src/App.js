import './App.css';
import Body from './component/Body/Body';
import Contact from './component/Contact/Contact';
import Nav from './component/Nav/Nav';
import Portfolio from './component/Portfolio/Portfolio';
import React, { Component }  from 'react';



function App() {
  return (
    <div className="App">
      <Nav/>
      <Body />
      <Portfolio />
      <Contact />
      
    </div>
  );
}

export default App;
