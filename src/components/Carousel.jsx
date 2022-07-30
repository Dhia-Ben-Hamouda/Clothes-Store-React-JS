import React from "react";
import { useState } from "react";
import img1 from "../assets/carousel1.jpg";
import img2 from "../assets/carousel2.jpg";
import img3 from "../assets/carousel3.jpg";

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