import React from 'react';
import NavBar from './NavBar';
import MainPage from './MainPage';
import AboutMe from './AboutMe';
import MyWork from './MyWork';
import MoabVid from './video/MoabCompile.mp4';
import profilePic from '../assets/proPic.JPG';
import { CSSTransition } from 'react-transition-group';
import { HashRouter, BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App(props) {

  const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/mywork', name: 'My Work', Component: MyWork },
    { path: '/intro', name: 'Intro', Component: MainPage },
    { path: '/about', name: 'About', Component: AboutMe },
  ]

  return (
    <Router>
      <div style={{alignItems:'center', textAlign:'center'}}>
        <NavBar />
        <div className="container">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
      </div>
    </Router>
  );
}

const Home = () => {
    return (
        <div className="videoContainer" >
            <video autoPlay loop muted className="video" >
                <source src={MoabVid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="content">
                <div className="subContent" >
                    <h1>Gabe Chacon</h1>
                    <p>Software Engineer and Marine Veteran</p>
                    <img
                        src={profilePic}
                        alt="profile"
                        
                        />
                </div>
            </div>
        </div>
    )
}

export default App;