import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Bar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-top: -8px;
  margin-left: -9px;
  z-index: 1;
`
const ListItem = styled.li`
  font-size: small;
  color: purple;
  text-decoration: none;

  &:hover {
    color: green;
  }
`

function NavBar(props) {
  const [currentTab, setCurrentTab] = useState();

  return (
    <Bar>
      <Link to="/home">
        <img src='../assets/logoFEC.png' style={{height:"20px", width:"20px"}}/>
      </Link>
      <ul style={{display:'flex', justifyContent:'space-around', listStyle:'none', width:'80%', alignItems:'center', }}>
        <Link to="/" style={{textDecoration:"none"}}>
          <ListItem>Intro</ListItem>
        </Link>
        <Link to="/mywork" style={{textDecoration:"none"}}>
          <ListItem>My Work</ListItem>
        </Link>
        <Link to="/about" style={{textDecoration:"double"}}>
          <ListItem>About Me</ListItem>
        </Link>
      </ul>
    </Bar>
  );
}

export default NavBar;