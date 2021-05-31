import React, { useState, useEffect, useRef } from "react";
import Carousel from 'react-elastic-carousel';
import '../../../../public/styles.css';
import image1 from '../../assets/gifs/Voverview.gif';
import image2 from '../../assets/gifs/Vcategories.gif';
import image3 from '../../assets/gifs/Vmaps.gif';
import image4 from '../../assets/gifs/Vlogout.gif';
import image5 from '../../assets/gifs/Vvendors.gif';

function Vendicator(props) {

  const items = [
    {id:1, image: image1, title:'App Overview'},
    {id:2, image: image2, title:'Categories'},
    {id:3, image: image3, title:'Map'},
    {id:4, image: image4, title:'Log Out'},
    {id:5, image: image5, title:'Vendors'}
  ];

  return (
    <div className="carouselContainer">
      <h2 className="carouselTitle">Vendicator</h2>
      <p className="projectDescription">Tasked with building a minimum viable product in two days, I designed and built a mobile application. The general idea of the app is to aid micro businesses, including examples like: elote person, flower seller, garage sales, various other small vendors, etc., wherever they may be. If the seller is mobile they can update their location as desired, or have a live location set up. That way buyers can locate any vendors where ever they may be. This is to find any vendor that may have been previously elusive.</p>
      <Carousel>
        {items.map((item, idx) => {
        return (
          <div key={item.id}>
            <h4 className="itemTitle" style={{textAlign:"auto"}}>{item.title}</h4>
            <img src={item.image} style={{height: "500px"}} />
          </div>
        )
       })}
      </Carousel>
      <h5>React Native | Cocoapods | Apple Maps API</h5>
    </div>
  );
}

export default Vendicator;