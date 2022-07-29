import React from "react";
import Navbar from "./Navbar.jsx";
import shirt from "../assets/shirt.png";
import test from "../assets/test.png";

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
            <a href="#featured">Get Started</a>
          </div>
          <div className="illustration">
            <img src={shirt} alt="" />
          </div>
        </div>
      </div>
      <section id="featured">
        <div className="header">
          <h1>Featured Products</h1>
        </div>
        <div className="grid">
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200 $</h3>
              </div>
              <button>See products</button>
            </div>
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200 $</h3>
              </div>
              <button>See products</button>
            </div>
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200 $</h3>
              </div>
              <button>See products</button>
            </div>
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200 $</h3>
              </div>
              <button>See products</button>
            </div>
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200 $</h3>
              </div>
              <button>See products</button>
            </div>
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200 $</h3>
              </div>
              <button>See products</button>
            </div>
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200 $</h3>
              </div>
              <button>See products</button>
            </div>
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200 $</h3>
              </div>
              <button>See products</button>
            </div>
          </div>
      </section>
    </section>
  )
}

export default Home;