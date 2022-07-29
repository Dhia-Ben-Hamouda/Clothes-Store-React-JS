import React from "react";
import Navbar from "./Navbar.jsx";
import shirt from "../assets/shirt.png"

const Home = () => {
  return (
    <section id="home">
      <Navbar />
      <div className="wrapper">
        <div className="inner-wrapper">
          <div className="text">
            <h1>The best place to buy clothes </h1>
            <h2>experience the luxury of buying high
              quality clothes from home with low
              prices and fast shipping !</h2>
            <a href="#">Get Started</a>
          </div>
          <div className="illustration">
            <img src={shirt} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;