import produce from "immer";
import { Reducer } from "redux";
import { formatPrice } from "utils/format";
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: [],
  total: 0,
  totalFormatted: "R$ 00,00",
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART": {
      const { product } = action.payload;

      return produce(state, (draft) => {
        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id,
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
          draft.total += product.price;

          draft.totalFormatted = formatPrice(draft.total);
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
          draft.total += product.price;
          draft.totalFormatted = formatPrice(draft.total);
        }
      });
    }
    default: {
      return state;
    }
  }
};

export default cart;
