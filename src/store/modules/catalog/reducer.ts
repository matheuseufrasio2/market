import { Reducer } from "redux";
import produce from "immer";
import { ICatalogState } from "./types";

const INITIAL_STATE: ICatalogState = {
  items: [],
  itemsFiltered: {
    products: [],
    filterByRating: "default",
  },
  page: 1,
};

const catalog: Reducer<ICatalogState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS_TO_CATALOG": {
      const { products } = action.payload;

      return produce(state, (draft) => {
        draft.items = [...products];
        draft.itemsFiltered = {
          products: products,
          filterByRating: "default",
        };
      });
    }
    case "CHANGE_FILTER_BY_RATING": {
      const { value } = action.payload;
      return produce(state, (draft) => {
        if (value === "default") {
          draft.itemsFiltered.products = draft.items;
          return;
        }
        draft.itemsFiltered.products = draft.items.filter(
          (product) => product.rating.rate > Number(value),
        );
      });
    }
    case "NEXT_PAGE": {
      return produce(state, (draft) => {
        const maximumPages = draft.itemsFiltered.products.length / 3;
        if (state.page < maximumPages) {
          draft.page++;
        }
      });
    }
    case "PREVIOUS_PAGE": {
      return produce(state, (draft) => {
        if (state.page === 1) return state;
        draft.page--;
      });
    }
    case "SORT_BY_LOWER_PRICE": {
      return produce(state, (draft) => {
        draft.itemsFiltered.products = draft.itemsFiltered.products.sort(
          (a, b) => {
            return a.price - b.price;
          },
        );
      });
    }
    case "SORT_BY_HIGHEST_PRICE": {
      return produce(state, (draft) => {
        draft.itemsFiltered.products = draft.itemsFiltered.products.sort(
          (a, b) => {
            return b.price - a.price;
          },
        );
      });
    }
    default: {
      return state;
    }
  }
};

export default catalog;
