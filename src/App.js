import "./App.css";
import Body from "./component/Body/Body";
import Contact from "./component/Contact/Contact";
import Nav from "./component/Nav/Nav";
import Portfolio from "./component/Portfolio/Portfolio";
import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* <Body />
        <Portfolio />
        <Contact /> */}
        <Routes>

          <Route path="/Contact" element={<> <Body /> <Contact /></>} ></Route>
          <Route path="/Portfolio" element={<> <Body /> <Portfolio/></>} ></Route>
          <Route path="/" element={<><Body /> <Portfolio /> <Contact/></>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
