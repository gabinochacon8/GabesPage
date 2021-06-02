import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logoFEC.png';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Bar = styled.nav`
  position: fixed;
  width: 105%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 30px;
  background-color: rgba(255, 255, 255, .4);
  margin-top: -8px;
  margin-left: -9px;
  z-index: 1000;
`
const DaLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-left: 5px;
  padding-right: 5px;
  listStyle: none;
  width: 50%;
`

function NavBar(props) {
  const [currentTab, setCurrentTab] = useState();

  return (
    <Bar>
      <NavLink to="/" exact className="logo" activeStyle={{color: "rgb(103, 58, 183)"}}>
        <span>My Portfolio</span>
      </NavLink>
      <DaLinks>
          <NavLink
            className="ListItem"
            to="/mywork"
            exact
            activeStyle={{
              color: "rgb(103, 58, 183)"
            }}
          >
            My Work
          </NavLink>
        <NavLink
          className="ListItem"
          to="/intro"
          exact
          activeStyle={{
            color: "rgb(103, 58, 183)"
          }}
        >
          Tech Stack
        </NavLink>
        <NavLink
          className="ListItem"
          to="/about"
          exact
          activeStyle={{
            color: "rgb(103, 58, 183)"
          }}
        >
          About Me
        </NavLink>
      </DaLinks>
      <div>
      <a href="https://www.linkedin.com/in/gabe-chacon" target="_blank" className="mediaLinks"><FaLinkedin /></a>
      <a href="https://www.github.com/gabinochacon8" target="_blank" className="mediaLinks"><FaGithub /></a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gabino.chacon8@gmail.com" target="_blank" className="mediaLinks"><FaEnvelope /></a>
      </div>
    </Bar>
  );
}

export default NavBar;