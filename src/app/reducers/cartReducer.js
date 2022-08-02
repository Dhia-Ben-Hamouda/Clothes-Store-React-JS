import * as actionTypes from "../constants/cartConstants.js";
import produce from "immer";

const initialState = {
  products: [], // { id , price , quantity , name , picture , color , size }
  total: 0,
  quantity: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return produce(state, (draft) => {

        const exist = draft.products.find((product)=>product._id === action.payload._id);

        if(exist)
        {
          exist.quantity++;
        }
        else
        {
          draft.products.push(action.payload);
        }

        draft.quantity++;
        draft.total += action.payload.price;

      })
    case actionTypes.REMOVE_FROM_CART:
      return produce(state, (draft) => {

      })
    case actionTypes.INCREMENT:
      return produce(state, (draft) => {

        const payload = action.payload;

        const exist = draft.products.find((product)=>product._id === payload._id);

        exist.quantity++;
        draft.quantity++;
        draft.total += payload.price;

      })
    case actionTypes.DECREMENT:
      return produce(state, (draft) => {

      })
    default:
      return state;  
  }
}

export default reducer;