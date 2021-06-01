import React, { useState, useEffect, useRef } from "react";
import Carousel from 'react-elastic-carousel';
import '../../../../public/styles.css';
import image1 from '../../assets/gifs/TBsplash.gif';
import image2 from '../../assets/gifs/TBItinerary Screen.gif';
import image3 from '../../assets/gifs/TBMap Directions.gif';
import image4 from '../../assets/gifs/TBMap Search.gif';
import image5 from '../../assets/gifs/TBMessages.gif';

function TravelBug(props) {

  const items = [
    {id:1, image: image1, title:'Splash Start Screen'},
    {id:3, image: image2, title:'Itinerary Screen'},
    {id:4, image: image3, title:'Map Directions'},
    {id:5, image: image4, title:'Map Search'},
    {id:7, image: image5, title:'Messages'}
  ];

  return (
    <div className="carouselContainer">
      <h2 className="carouselTitle">TravelBug</h2>
      <p className="projectDescription">A group of 8 engineers, including myself, were tasked with building a mobile application for a client that handled study abroad programs for various schools around the world. An engineer and I were in charge of the Maps section, while the others were in charge of App Navigation, Itinerary, Messages, and full Back-End setup. The Maps consisted of google-maps api with full search and directions capabilities. We also integrated predefined places for the students, event pins (in the shape of lady bugs) that are directly dependent on the itinerary and based on the current or selected date, and pins the student can set when a location is searched.</p>
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
      <h5>React Native | Cocoapods | Google-Maps API | PostreSQL | Mongoose/MongoDB</h5>
    </div>
  );
}

export default TravelBug;