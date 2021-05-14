import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Bar = styled.nav`
  display: flex;
  flex-direction = row;
  justify-content: space-around;
  align-items: center;
  min-height: 10vh;
  background-color: dodgerblue;
`

function NavBar(props) {
  return (
    <Bar>
      <h3>
        LOGO: Home
      </h3>
      <ul style={{display:'flex', justifyContent:'space-around', listStyle:'none', width:'80%', alignItems:'center', }}>
        <li>About Me</li>
        <li>My Work</li>
      </ul>
    </Bar>
  );
}

export default NavBar;