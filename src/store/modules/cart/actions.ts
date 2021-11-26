import Product from "types/Product";

export function addProductToCart(product: Product) {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: {
      product,
    },
  };
}
