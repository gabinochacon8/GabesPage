import React from "react";
import styled from "styled-components";
import profilePic from "../assets/proPic.png";
import { FaGithub, FaLinkedin, FaEnvelope, FaScroll } from "react-icons/fa";

function AboutMe(props) {
  return (
    <div id="about" className="about">
      <div className="heading"> {/* class located in projects css */}
        <div class="hr"></div> {/* class located in projects css */}
        <div>
          <h1 className="about-header">About Me</h1>
        </div>
        <div class="hr"></div> {/* class located in projects css */}
      </div>
      <div className="about_container">
        <img
          src={profilePic}
          alt="profile image"
          className="main_profile_img"
          sizes='(max-width: 600px) 200px, 300px'
        />
        <div className="about_p">
          <div className="hello">
            <h2>HELLO!</h2>
          </div>
          <p>
            My name is Gabino, but I go by Gabe. I am a Marine Veteran who found a
            love for coding in 2018 when solo traveling the world. I am a full stack
            developer, and I can build apps from front to back. Currently I am learning
            Python, but I am fluent in Javascript. I really like to work with mobile
            applications, but I also love desiging web apps.
            <a href="#tech_skills" style={{color:'#f1f1f1'}}>{' '} My stack </a>
            listed above are most technologies I am comfortable with. I am also learning Django
            to better develop my backend skills.{"\n"}
          </p>

          <p>
            My education consists of a degree from National University in Computer Science
            and two bootcamps including Hack Reactor and PDX Code Guild. I am also
            constantly updating my knowlege using medium.com, YouTube, and various other
            media. This is truly my passion, and I am on my computer 80%
            of my day practicing what I know, and implementing everything with new apps.
            Although I am a junior developer, I can relentlessly solve any problem.
          </p>

          <p>
            Thank you for stopping by my page. Please take a look at my resume,
            and let me know if there are any solutions I can help with! Feel
            free to hire me as well 😉
          </p>
          <div className="about_links">
            <div className="link">
              <a
                href="https://drive.google.com/file/d/1w-Io1PnBhgpCVlAcwE99gjoOwDFfrQxY/view?usp=sharing"
                target="_blank"
                className="resume"
              >
                <FaScroll size="lg" />
              </a>
            </div>
            <div className="link">
              <a
                href="https://www.linkedin.com/in/gabe-chacon/"
                target="_blank"
                className="linked_in_button"
              >
                <FaLinkedin size="lg" />
              </a>
            </div>
            <div className="link">
              <a
                href="mailto:gabino.chacon8@gmail.com"
                target="_blank"
                className="gmail_button"
              >
                <FaEnvelope size="lg" />
              </a>
            </div>
            <div className="link">
              <a
                href="https://github.com/gabinochacon8"
                target="_blank"
                className="github_button"
              >
                <FaGithub size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "50%",
          maxWidth: '400px',
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
