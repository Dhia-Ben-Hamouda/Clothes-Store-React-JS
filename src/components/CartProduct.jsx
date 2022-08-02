import React from "react";
import { increment , decrement , removeFromCart } from "../app/actions/cartActions.js";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";

const CartProduct = ({product}) => {
  const dispatch = useDispatch();

  function inc()
  {
    dispatch(increment(product));
  }

  function dec()
  {
    dispatch(decrement(product));
  }

  function remove()
  {
    dispatch(removeFromCart(product));
  }

  return (
    <>
      <div className="product">
        <div className="left">
          <img src={product.picture} alt="" />
          <h1>{product.name}</h1>
        </div>
        <div className="right">
          <div className="quantity">
            <div onClick={ dec } className="decrement">
              -
            </div>
            <div className="count">
              {
                product.quantity
              }
            </div>
            <div onClick={ inc } className="increment">
              +
            </div>
          </div>
          <h1>{product.price * product.quantity} $</h1>
          <FaTrash onClick={remove} className="icon" />
        </div>
      </div>
    </>
  )
}

export default CartProduct;