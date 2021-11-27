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

export function nextPage() {
  return {
    type: "NEXT_PAGE",
  };
}

export function previousPage() {
  return {
    type: "PREVIOUS_PAGE",
  };
}

export function sortByHighestPrice() {
  return {
    type: "SORT_BY_HIGHEST_PRICE",
  };
}

export function sortByLowerPrice() {
  return {
    type: "SORT_BY_LOWER_PRICE",
  };
}

export function searchByName(name: string) {
  return {
    type: "SEARCH_BY_NAME",
    payload: {
      name,
    },
  };
}
