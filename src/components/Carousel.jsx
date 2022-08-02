import React from "react";
import { useState } from "react";
import img1 from "../images/carousel1.jpg";
import img2 from "../images/carousel2.jpg";
import img3 from "../images/carousel3.jpg";

const images = [img1 , img2 , img3];


const Carousel = ()=>{
  const [src , setSrc] = useState(img1);

  return(
    <>
      <div className="carousel">
        <img src={src} alt="" />
      </div>
    </>
  )
}

export default Carousel;