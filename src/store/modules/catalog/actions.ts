import Product from "../../../types/Product";

export function addProductsToCatalog(products: Product[]) {
  return {
    type: "ADD_PRODUCTS_TO_CATALOG",
    payload: {
      products,
    },
  };
}

export function changeFilterByRating(value: string) {
  return {
    type: "CHANGE_FILTER_BY_RATING",
    payload: {
      value,
    },
  };
}

export function nextPage(lastPage: number) {
  return {
    type: "NEXT_PAGE",
    payload: {
      lastPage,
    },
  };
}

export function previousPage() {
  return {
    type: "PREVIOUS_PAGE",
  };
}
