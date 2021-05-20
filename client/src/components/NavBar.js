import React from 'react';
import styled from 'styled-components';
import { HashRouter, BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Bar = styled.nav`
  display: flex;
  flex-direction = row;
  justify-content: space-around;
  align-items: center;
  min-height: 7vh;
  background-color: dodgerblue;
`

function NavBar(props) {
  return (
    <Bar>
      <Link to="/home">
      <h3>
        <img src='../assets/logoFEC.png' style={{height:"20px", width:"20px"}}/>
      </h3>
      </Link>
      <ul style={{display:'flex', justifyContent:'space-around', listStyle:'none', width:'80%', alignItems:'center', }}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About Me</li>
        </Link>
        <Link to="/mywork">
          <li>My Work</li>
        </Link>
      </ul>
    </Bar>
  );
}

export default NavBar;