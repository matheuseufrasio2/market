import Product from "../../../types/Product";

export function addProductsToCatalog(products: Product[]) {
  return {
    type: "ADD_PRODUCTS_TO_CATALOG",
    payload: {
      products,
    },
  };
}
