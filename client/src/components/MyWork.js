import React from 'react';
import TravelBug from './carousels/TravelBug';
import Vendicator from './carousels/Vendicator';
import PixelTri from './carousels/PixelTri';

function MyWork(props) {

  const listOfWorks = [
    <TravelBug />,
    <PixelTri />,
    <Vendicator />
  ]

  const renderWorks = (list) => {
    return (
      list.map((el, idx) => {
        return(
          idx % 2 === 1 ?
            <div style={{backgroundColor:"grey"}}>
              {el}
            </div>
            :
            <div>
              {el}
            </div>
        )
      })
    )
  }

  return (
    <div style={{color:'black', paddingTop: "30px"}}>
      <h1 style={{ fontSize:'3em', textAlign:'left', marginLeft:'50px'}} >My Work</h1>
      <div>
        {renderWorks(listOfWorks)}
      </div>
    </div>
  );
}

export default MyWork;