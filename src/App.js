import "./App.css";
import Body from "./component/Body/Body";
import Contact from "./component/Contact/Contact";
import Nav from "./component/Nav/Nav";
import Portfolio from "./component/Portfolio/Portfolio";
import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
        <Nav />
        {/* <Body />
        <Portfolio />
        <Contact /> */}
        <Routes>
          <Route path="/" element={  <Body />} ></Route>
          <Route path="/Contact" element={  <Contact />} ></Route>
          <Route path="/Portfolio" element={ <Portfolio/>} ></Route>
          {/* <Route path="/" element={<><Body /> <Portfolio /> <Contact/></>}></Route> */}
        </Routes>
    </Router>
      </div>
  );
}

export default App;
