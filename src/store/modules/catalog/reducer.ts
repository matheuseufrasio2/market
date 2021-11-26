import { Reducer } from "redux";
import { ICatalogState } from "./types";

const INITIAL_STATE: ICatalogState = {
  items: [],
};

const catalog: Reducer<ICatalogState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS_TO_CATALOG": {
      const { products } = action.payload;
      return {
        items: products,
      };
    }
    default: {
      return state;
    }
  }
};

export default catalog;
