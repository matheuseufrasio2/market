type Product = {
  id: number;
  title: string;
  price: number;
  priceFormatted?: string;
  description: string;
  description5words?: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default Product;
