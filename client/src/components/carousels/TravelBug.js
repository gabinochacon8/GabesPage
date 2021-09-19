import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-elastic-carousel";
import "../../../../public/styles.css";
import image1 from "../../assets/gifs/TBsplash.gif";
import image2 from "../../assets/gifs/TBItinerary Screen.gif";
import image3 from "../../assets/gifs/TBMap Directions.gif";
import image4 from "../../assets/gifs/TBMap Search.gif";
import image5 from "../../assets/gifs/TBMessages.gif";

function TravelBug(props) {
  const items = [
    { id: 1, image: image1, title: "Splash Start Screen" },
    { id: 3, image: image2, title: "Itinerary Screen" },
    { id: 4, image: image3, title: "Map Directions" },
    { id: 5, image: image4, title: "Map Search" },
    { id: 7, image: image5, title: "Messages" },
  ];

  return (
    <div className="carouselContainer">
      <h2 className="carouselTitle">TravelBug</h2>
      <div className="projectDescription">
        <p>
          Travel Bug is a mobile application designed to aid study abroad
          programs for schools around the world. The app contains auth for
          students or admin. It has an itinerary with every event based on date
          chosen with current day as default. The maps have preloaded pins based
          on the events for that day, and also contains important locations such
          as embassy, etc. There is also an alert system, and two way messaging.
        </p>
      </div>
      <div className="carouselDiv">
        <div className="carousels">
          <Carousel>
            {items.map((item, idx) => {
              return (
                <div key={item.id}>
                  <h4 className="itemTitle" style={{ textAlign: "auto" }}>
                    {item.title}
                  </h4>
                  <img src={item.image} className="carouselImage" />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <h5>
        React Native | Cocoapods | Google-Maps API | PostreSQL |
        Mongoose/MongoDB
      </h5>
    </div>
  );
}

export default TravelBug;
