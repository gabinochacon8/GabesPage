import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";

const Bar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.3);
  margin-top: -8px;
  margin-left: -9px;
  z-index: 1;
`
// const styles = {
//   ListItems: {
//     font-size: "small",
//     color: "grey",
//     text-decoration: "none",

//     &:hover {
//       color: black;
//     }
//   }
// }

function NavBar(props) {
  const [currentTab, setCurrentTab] = useState();

  return (
    <Bar>
      <Link to="/">
        <img src='../assets/logoFEC.png' style={{height:"20px", width:"20px"}}/>
      </Link>
      <div style={{display:'flex', justifyContent:'space-around', listStyle:'none', width:'80%', alignItems:'center', }}>
        <NavLink
          className="ListItem"
          to="/intro"
          activeStyle={{
            color: "black"
          }}
        >
          Intro
        </NavLink>
        <NavLink
          className="ListItem"
          to="/mywork"
          activeStyle={{
            color: "black"
          }}
        >
          My Work
        </NavLink>
        <NavLink
          className="ListItem"
          to="/about"
          activeStyle={{
            color: "black"
          }}
        >
          About Me
        </NavLink>
      </div>
    </Bar>
  );
}

export default NavBar;