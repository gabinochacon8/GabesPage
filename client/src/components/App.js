import React, { useEffect, useState } from "react";
import $ from "jquery";
import NavBar from "./NavBar";
import TechStack from "./TechStack";
import AboutMe from "./AboutMe";
import Projects from './Projects';
import Footer from "./Footer";
import star_background from "../assets/stars.jpeg";
import StarfieldAnimation from "react-starfield-animation";

function App(props) {

  useEffect(() => {
    setTimeout(() => {
      $(document).ready(() => {
          $('body').addClass('loaded');
        })
    }, 1500);
  }, [])

  return (
    <div>
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
      </div>
      <NavBar />
      <Home id="home" />
      <Projects />
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
        boxShadow: '0 8px 6px -6px black'
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

// To transfer files into aws
// scp -i actual_frontend_sdc.pem ../macCutout.png ubuntu@ec2-3-135-148-224.us-east-2.compute.amazonaws.com:assets