import React from 'react';
import TravelBug from './carousels/TravelBug';
import Vendicator from './carousels/Vendicator';
import PixelTri from './carousels/PixelTri';

function MyWork(props) {

  return (
    <div style={{color:'black', paddingTop: "30px"}}>
      <h1 style={{ fontSize:'3em', textAlign:'left', marginLeft:'50px'}} >My Work</h1>
      <div>
        <TravelBug />
        <PixelTri />
        <Vendicator />
      </div>
    </div>
  );
}

export default MyWork;