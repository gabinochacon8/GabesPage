import React, { useEffect } from "react";
import $ from "jquery";
import NavBar from "./NavBar";
import TechStack from "./TechStack";
import AboutMe from "./AboutMe";
import MyWork from "./MyWork";
import Footer from "./Footer";
import MoabVid from "./video/MoabCompile.mp4";
import profilePic from "../assets/proPic.png";
import star_background from "../assets/stars.jpeg";
import StarfieldAnimation from "react-starfield-animation";

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
    <div
      className="home"
      style={{
        backgroundImage: `url(${star_background})`,
      }}
    >
      <div className="content_container">
        <div className="content">
          <div className="subContent">
            <div>
              <h1 className="myNameHeadline">GABE CHACON</h1>
            </div>
            <p>Software Engineer and Marine Veteran</p>
          </div>
        </div>
      </div>

      <StarfieldAnimation
        numParticles={400}
        style={{
          position: "absolute",
          zIndex: 1,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
    </div>
    // <div className="videoContainer" id="home">
    //   <video autoPlay playsinline loop muted autobuffer className="video">
    //     <source src={MoabVid} type="video/mp4" />
    //     Your browser does not support the video tag.
    //   </video>
    // <div className="content_container">
    //   <div className="content">
    //     <div className="subContent">
    //       <div>
    //         <h1 className="myNameHeadline">GABE CHACON</h1>
    //       </div>
    //       <p>Software Engineer and Marine Veteran</p>
    //     </div>
    //   </div>
    // </div>
    // </div>
  );
};

export default App;
