import React from 'react';
import NavBar from './NavBar';
import MainPage from './MainPage';
import AboutMe from './AboutMe';
import MyWork from './MyWork';
import { HashRouter, BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div style={{alignItems:'center', textAlign:'center'}}>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/mywork" component={MyWork} />
          <Route path="/about" component={AboutMe} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div style={{color:"white"}}>
      <h1>Home Page</h1>
    </div>
  )
};

export default App;