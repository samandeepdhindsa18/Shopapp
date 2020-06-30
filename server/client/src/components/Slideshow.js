import React from 'react';
import { Slide } from 'react-slideshow-image';
import './App.css';
const image_data = require('../datasources/products');

const properties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    // console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/6/7/ae9cd58d-7daa-4331-9e20-cbaa3499d77a1591539621609-Catwalk-Carlton_Desk.jpg'})`,
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/6/7/78b53c1d-f35a-4581-9bd4-e0818fbace2e1591539539985-Gini-jony_Desk_Banner.jpg'})`,
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${'https://img.ltwebstatic.com/images3_acp/2020/06/08/1591586444eba72832591c6a5516a1826050099139.jpg'})`,
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${'https://www.lulus.com/blog/wp-content/uploads/2019/02/twentytwoivy_photo-1.16.19.jpg'})`,
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${'https://c.pxhere.com/photos/45/22/woman_snowflakes_winter_clothing-1046871.jpg!d'})`,
            }}
          ></div>
        </div>
      </Slide>
    </div>
  );
};

// const Slideshow = () => {
//   const women_products_data = image_data.women_clothing;
//   console.log(women_products_data);

//   return <div>slideshow</div>;
// };

export default Slideshow;
