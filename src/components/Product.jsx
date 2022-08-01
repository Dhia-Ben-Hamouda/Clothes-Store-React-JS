import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../app/actions/cartActions";

const Product = ({id , picture , name , price , size , gender , color , product}) => {
  const dispatch = useDispatch();

  function add()
  {
    dispatch(addToCart(product));
  }

  return (
    <>
      <div className="item">
        <div className="img-container">
          <img src={picture} alt="" />
        </div>
        <div>
          <h3>{name}</h3>
          <h3>{price} $</h3>
        </div>
        <button onClick={add}>Add to Cart</button>
      </div>
    </>
  )
}

export default Product;