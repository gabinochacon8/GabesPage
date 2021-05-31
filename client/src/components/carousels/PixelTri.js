import React, { useState, useEffect, useRef } from "react";
import Carousel from 'react-elastic-carousel';
import '../../../../public/styles.css'
import image1 from '../../assets/gifs/PTwholePageOverview.gif'
import image2 from '../../assets/gifs/PTgalleryOverview.gif'
import image3 from '../../assets/gifs/PTproductInfo.gif'
import image4 from '../../assets/gifs/PTrelatedProducts.gif'
import image5 from '../../assets/gifs/PTquestionsAndAnswsers.gif'
import image6 from '../../assets/gifs/PTratingsAndReviews.gif'

function PixelTri(props) {

  const items = [
    {id:1, image: image1, title:'Single Page Overview'},
    {id:2, image: image2, title:'Image Gallery'},
    {id:3, image: image3, title:'Current Product Details'},
    {id:4, image: image4, title:'Related Products'},
    {id:5, image: image5, title:'Questions and Answers'},
    {id:6, image: image6, title:'Ratings and Reviews'}
  ];

  return (
    <div className="carouselContainer">
      <h2 className="carouselTitle">Pixel Triceratops</h2>
      <p className="projectDescription">A group of 4 engineers, including myself, were tasked with building a single-page e-commerce web application. I was in charge of the Product Overview, while the others were in charge of Related Products, Questions and Answers, and Ratings and Reviews. </p>
      <Carousel>
        {items.map((item, idx) => {
        return (
          <div key={item.id}>
            <h4 className="itemTitle">{item.title}</h4>
            <img src={item.image} className="carouselImage" />
          </div>
        )
       })}
      </Carousel>
      <h5>ReactJS | React Hooks | NodeJS | Webpack/Babel | Express | Axios | Styled Components | Jest | React Testing Library</h5>
    </div>
  );
}

export default PixelTri;
