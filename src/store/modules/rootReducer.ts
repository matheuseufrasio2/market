import { combineReducers } from "redux";
import cart from "./cart/reducer";
import catalog from "./catalog/reducer";
import page from "./page/reducer";

export default combineReducers({
  cart,
  catalog,
  page,
});
