import React from "react";
import NavBar from "./NavBar";
import TechStack from "./TechStack";
import AboutMe from "./AboutMe";
import MyWork from "./MyWork";
import MoabVid from "./video/MoabCompile.mp4";
import profilePic from "../assets/proPic.png";
import { CSSTransition } from "react-transition-group";
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";

function App(props) {
  const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/mywork", name: "My Work", Component: MyWork },
    { path: "/intro", name: "Intro", Component: TechStack },
    { path: "/about", name: "About", Component: AboutMe },
  ];

  return (
    <div>
      <NavBar />
      <Home id="home" />
      <MyWork />
      <TechStack />
      <AboutMe />
    </div>
  );
}

const Home = () => {
  return (
    <div className="videoContainer">
      <video autoPlay playsinline loop muted autobuffer className="video">
        <source src={MoabVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <div className="subContent">
          <div>
            <h1 className="myNameHeadline">GABE CHACON</h1>
          </div>
          <p>Software Engineer and Marine Veteran</p>
          <div>
            <img src={profilePic} alt="profile" className="main_profile_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
