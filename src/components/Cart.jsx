import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct.jsx";

const Cart = () => {
  const products = useSelector(state => state.cart.products);
  const total = useSelector(state => state.cart.total);

  return (
    <>
      <section id="cart">
        <Navbar />
        <div className="cart-container">
          <div className="products">
            {
              products.map((product) => {
                return (
                  <CartProduct 
                    key={product._id}
                    product={product}
                  />
                )
              })
            }

          </div>
          <div className="checkout">
            <h1>Total</h1>
            <h3>{total} $</h3>
            <button>Checkout</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart;