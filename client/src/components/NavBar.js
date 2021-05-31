import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logoFEC.png';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGithub, faEnvelope, falinkedin } from '@fortawesome/free-solid-svg-icons';
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
      <NavLink to="/" exact className="logo" activeStyle={{color: "grey"}}>
        <span>Gabe Chacon</span>
      </NavLink>
      <DaLinks>
          <NavLink
            className="ListItem"
            to="/mywork"
            exact
            activeStyle={{
              color: "grey"
            }}
          >
            My Work
          </NavLink>
        <NavLink
          className="ListItem"
          to="/intro"
          exact
          activeStyle={{
            color: "grey"
          }}
        >
          Tech Stack
        </NavLink>
        <NavLink
          className="ListItem"
          to="/about"
          exact
          activeStyle={{
            color: "grey"
          }}
        >
          About Me
        </NavLink>
      </DaLinks>
      <div>
      <a href="https://www.linkedin.com/in/gabe-chacon" className="mediaLinks"><FaLinkedin /></a>
      <a href="https://www.github.com/gabinochacon8" className="mediaLinks"><FaGithub /></a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gabino.chacon8@gmail.com" className="mediaLinks"><FaEnvelope /></a>
      </div>
    </Bar>
  );
}

export default NavBar;