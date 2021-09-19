import React from "react";
import NavBar from "./NavBar";
import TechStack from "./TechStack";
import AboutMe from "./AboutMe";
import MyWork from "./MyWork";
import Footer from "./Footer";
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
  return (
    <div>
      <NavBar />
      <Home id="home" />
      <MyWork />
      <TechStack />
      <AboutMe />
      <Footer />
    </div>
  );
}

const Home = () => {
  return (
    <div className="videoContainer" id="home">
      <video autoPlay playsinline loop muted autobuffer className="video">
        <source src={MoabVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content_container">
        <div className="content">
          <div className="subContent">
            <div>
              <h1 className="myNameHeadline">GABE CHACON</h1>
            </div>
            <p>Software Engineer and Marine Veteran</p>
            <div>
              <img
                src={profilePic}
                alt="profile"
                className="main_profile_img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
