import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import img1 from "../images/carousel1.jpg";
import img2 from "../images/carousel2.jpg";
import img3 from "../images/carousel3.jpg";

const Carousel = ()=>{

  return(
    <>
      <div className="carousel">
        <img src={img1} alt=""/>
      </div>
    </>
  )
}

export default Carousel;