import { combineReducers } from "redux";
import cart from "./reducers/cartReducer.js";

const rootReducer = combineReducers({
  cart
});

export default rootReducer;