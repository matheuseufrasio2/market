import { createStore } from "redux";
import { ICartState } from "./modules/cart/types";
import { ICatalogState } from "./modules/catalog/types";
import rootReducer from "./modules/rootReducer";

export interface IState {
  cart: ICartState;
  catalog: ICatalogState;
}

const store = createStore(rootReducer);

export default store;
