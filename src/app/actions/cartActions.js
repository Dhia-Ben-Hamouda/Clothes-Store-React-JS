import * as actionTypes from "../constants/cartConstants.js";

export function addToCart(product)
{
  return{
    type:actionTypes.ADD_TO_CART,
    payload:product
  }  
}

export function removeFromCart(product)
{
  return{
    type:actionTypes.REMOVE_FROM_CART,
    payload:product
  }
}

export function increment(product)
{
  return{
    type:actionTypes.INCREMENT,
    payload:product
  }
}

export function decrement(product)
{
  return{
    type:actionTypes.DECREMENT,
    payload:product
  }
}