import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import img1 from "../images/carousel1.jpg";
import img2 from "../images/carousel2.jpg";
import img3 from "../images/carousel3.jpg";
import Carousell from 'react-bootstrap/Carousel';
import "../styles/_bootstrap.scss";

const Carousel = () => {

  return (
    <>
      <div className="local-bootstrap">
        <Carousell interval={3000}>
          <Carousell.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
          </Carousell.Item>
          <Carousell.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />
          </Carousell.Item>
          <Carousell.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />
          </Carousell.Item>
        </Carousell>
      </div>
    </>
  )
}

export default Carousel;