import Product from "types/Product";

export interface ICartItem {
  product: Product;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
}
