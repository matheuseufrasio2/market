import Product from "types/Product";

export interface ICatalogState {
  items: Product[];
  itemsFiltered: {
    products: Product[];
    filterByRating: "default" | "1" | "2" | "3" | "4" | "5";
    sortBy: "default" | "1" | "2";
  };
  page: number;
}
