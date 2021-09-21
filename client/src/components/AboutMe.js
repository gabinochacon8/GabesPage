import React from "react";
import styled from "styled-components";
import resume from "../../src/assets/GabeChaconResume.pdf";
import profilePic from "../assets/proPic.png";
import gmailLogo from "../../src/assets/Gmail-Logo.png";
import linkedIn from "../../src/assets/LI-Logo.png";
import githubPhoto from "../../src/assets/GitHub_logo.png";
import githubIcon from "../../src/assets/GitHub_mascot.png";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutMe(props) {
  return (
    <div id="about" className="about">
      <div data-aos="flip-down">
        <h1 style={{ fontSize: "3em", textAlign: "center" }}>About Me</h1>
      </div>
      <div className="about_container">
        <img
          src={profilePic}
          alt="profile image"
          className="main_profile_img"
        />
        <div className="about_p">
          <h2>HELLO! 👋🏼</h2>
          <p>
            My name is Gabe. You killed my... oh wait wrong story. I am a Marine
            Veteran who found a love for coding in 2018 when solo traveling the
            world. While eating breakfast in a hostel in Peru, I met a person
            working off of their laptop. I asked him what he did, and he told me
            he was a freelance software engineer for a startup company.
            Unfamiliar with coding, I was immediately intrigued. While sipping
            his coffee in Lima, he was able to contribute to building a web
            application in the United States. Inspired by the opportunity of
            software engineering, I took the initiative to learn how to code.
            Today, I am a qualified Fullstack Engineer.{" "}
          </p>

          <p>
            Thank you for stopping by my page. Please take a look at my resume,
            and let me know if there are any solutions I can help with!
          </p>
          <div className="about_links">
            <div className="link">
              <a href={resume} target="_blank" className="resume">
                {" "}
                <i
                  class="fas fa-scroll"
                  style={{ paddingRight: "3px", marginBottom: "100px" }}
                ></i>
                Resume
              </a>
            </div>
            <div className="link">
              <a
                href="https://www.linkedin.com/in/gabe-chacon/"
                target="_blank"
                className="linked_in_button"
              >
                {" "}
                <img src={linkedIn} width="60px" />
              </a>
            </div>
            <div className="link">
              <a
                href="mailto:=gabino.chacon8@gmail.com"
                target="_blank"
                className="gmail_button"
              >
                {" "}
                <img src={gmailLogo} width="21px" />
                Gmail
              </a>
            </div>
            <div className="link">
              <a
                href="https://github.com/gabinochacon8"
                target="_blank"
                className="github_button"
              >
                <img src={githubIcon} width="18px" className="github_content" />
                <img
                  src={githubPhoto}
                  width="45px"
                  className="github_content"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "100%",
          height: "5px",
          marginTop: "50px",
          borderColor: "rgb(103, 58, 183)",
          backgroundColor: "rgb(103, 58, 183)",
        }}
      />
    </div>
  );
}

export default AboutMe;
