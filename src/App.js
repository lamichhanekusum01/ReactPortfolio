import "./App.css";
import Contact from "./Components/Contact/Contact";
import Nav from "./Components/Nav/Nav";
import Portfolio from "./Components/Portfolio/Portfolio";
import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Body from "./Components/Body/Body";

function App() {
  return (
    <div className="App">
        <Router>
        <Nav />
        {/* <Body />
        <Portfolio />
        <Contact /> */}
        <Routes>
          {/* <Route path="/" element={  <Body />} ></Route> */}
          <Route path="/" element={<Body /> } />
          <Route path="/Contact" element={  <Contact />} ></Route>
          <Route path="/Portfolio" element={ <Portfolio/>} ></Route>
          {/* <Route path="/" element={<><Body /> <Portfolio /> <Contact/></>}></Route> */}
        </Routes>
    </Router>
      </div>
  );
}

export default App;
