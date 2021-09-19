import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logoFEC.png";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function NavBar(props) {
  const [currentTab, setCurrentTab] = useState();

  return (
    <div className="navBar">
      <div className="bar_content">
        <div>
          <a
            className="logo"
            href="#home"
            activeStyle={{ color: "rgb(103, 58, 183)" }}
          >
            <span style={{ textAlign: "left" }}>My Portfolio</span>
          </a>
        </div>
        <div className="links">
          <a
            className="ListItem"
            href="#mywork"
            activeStyle={{
              color: "rgb(103, 58, 183)",
            }}
          >
            My Work
          </a>
          <a
            className="ListItem"
            href="#tech_skills"
            activeStyle={{
              color: "rgb(103, 58, 183)",
            }}
          >
            Tech Stack
          </a>
          <a
            className="ListItem"
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
            className="mediaLinks"
          >
            <FaLinkedin size="xs" />
          </a>
          <a
            href="mailto:=gabino.chacon8@gmail.com"
            target="_blank"
            className="mediaLinks"
          >
            <FaEnvelope size="xs" />
          </a>
          <a
            href="https://www.github.com/gabinochacon8"
            target="_blank"
            className="mediaLinks"
          >
            <FaGithub size="xs" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
