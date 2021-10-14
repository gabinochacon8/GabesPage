import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logoFEC.png";
import { FaGithub, FaLinkedin, FaEnvelope, FaRocket } from "react-icons/fa";

function NavBar(props) {
  const [currentTab, setCurrentTab] = useState();

  return (
    <div className="navBar">
      <div className="bar_content">
        <div className="nav-bar-home">
          <a
            className="logo link_animation"
            href="#"
            activeStyle={{ color: "rgb(103, 58, 183)" }}
          >
            <FaRocket size="xs" />
          </a>
        </div>
        <div className="links">
          <a
            className="ListItem link_animation"
            href="#mywork"
            activeStyle={{
              color: "rgb(103, 58, 183)",
            }}
          >
            My Work
          </a>
          <a
            className="ListItem link_animation"
            href="#tech_skills"
            activeStyle={{
              color: "rgb(103, 58, 183)",
            }}
          >
            Tech Stack
          </a>
          <a
            className="ListItem link_animation"
            href="#about"
            activeStyle={{
              color: "rgb(103, 58, 183)",
            }}
          >
            About Me
          </a>
        </div>
        <div className="social_media_icons">
          <a
            href="https://www.linkedin.com/in/gabe-chacon"
            target="_blank"
            className="mediaLinks link_animation"
          >
            <FaLinkedin size="xs" />
          </a>
          <a
            href="mailto:=gabino.chacon8@gmail.com"
            target="_blank"
            className="mediaLinks link_animation"
          >
            <FaEnvelope size="xs" />
          </a>
          <a
            href="https://www.github.com/gabinochacon8"
            target="_blank"
            className="mediaLinks link_animation"
          >
            <FaGithub size="xs" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
