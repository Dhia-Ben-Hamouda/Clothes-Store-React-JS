import React from "react";
import Navbar from "./Navbar";
import { FaTrash } from "react-icons/fa";
import { useSelector , useDispatch} from "react-redux";
import { increment , decrement } from "../app/actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
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
                  <div key={product._id} className="product">
                    <div className="left">
                      <img src={product.picture} alt="" />
                      <h1>{product.name}</h1>
                    </div>
                    <div className="right">
                      <div className="quantity">
                        <div onClick={()=>{decrement(product)}} className="decrement">
                          -
                        </div>
                        <div className="count">
                          {
                            product.quantity
                          }
                        </div>
                        <div onClick={()=>{increment(product)}} className="increment">
                          +
                        </div>
                      </div>
                      <h1>{product.price * product.quantity} $</h1>
                      <FaTrash className="icon" />
                    </div>
                  </div>
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