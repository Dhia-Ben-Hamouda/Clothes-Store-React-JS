import React from "react";
import Navbar from "./Navbar";
import { FaTrash } from "react-icons/fa";
import test from "../assets/test.png";

const Cart = () => {
  return (
    <>
      <section id="cart">
        <Navbar />
        <div className="cart-container">
          <div className="products">
            <div className="product">
              <div className="left">
                <img src={test} alt="" />
                <h1>Name</h1>
              </div>
              <div className="right">
                <div className="quantity">
                  <div className="decrement">
                    -
                  </div>
                  <div className="count">
                    1
                  </div>
                  <div className="increment">
                    +
                  </div>
                </div>
                <h1>200 $</h1>
                <FaTrash className="icon" />
              </div>
            </div>
            <div className="product">
              <div className="left">
                <img src={test} alt="" />
                <h1>Name</h1>
              </div>
              <div className="right">
                <div className="quantity">
                  <div className="decrement">
                    -
                  </div>
                  <div className="count">
                    1
                  </div>
                  <div className="increment">
                    +
                  </div>
                </div>
                <h1>200 $</h1>
                <FaTrash className="icon" />
              </div>
            </div>
            <div className="product">
              <div className="left">
                <img src={test} alt="" />
                <h1>Name</h1>
              </div>
              <div className="right">
                <div className="quantity">
                  <div className="decrement">
                    -
                  </div>
                  <div className="count">
                    1
                  </div>
                  <div className="increment">
                    +
                  </div>
                </div>
                <h1>200 $</h1>
                <FaTrash className="icon" />
              </div>
            </div>
          </div>
          <div className="checkout">
            <h1>Total</h1>
            <h3>200 $</h3>
            <button>Checkout</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart;