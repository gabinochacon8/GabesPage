import React from 'react';
import NavBar from './NavBar';
import MainPage from './MainPage';
import AboutMe from './AboutMe';
import MyWork from './MyWork';
import { CSSTransition } from 'react-transition-group'
import { HashRouter, BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App(props) {

  const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/intro', name: 'Intro', Component: MainPage },
    { path: '/mywork', name: 'My Work', Component: MyWork },
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
    <div style={{color:"white"}}>
      <h1>Home Page</h1>
    </div>
  )
};

export default App;