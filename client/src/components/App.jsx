import React from 'react';
import NavBar from './NavBar';
import MainPage from './MainPage';
import AboutMe from './AboutMe';
import MyWork from './MyWork';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div style={{alignItems:'center', textAlign:'center'}}>
        <NavBar />
        <MainPage />
        <AboutMe />
        <MyWork />
      </div>
    </Router>
  );
}

export default App;