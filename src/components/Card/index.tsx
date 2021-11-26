import Image from "next/image";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addProductToCart } from "store/modules/cart/actions";
import Product from "types/Product";

import { Button, Container, Info, PhotoContainer } from "./styles";

type ICardProps = {
  product: Product;
};

export function Card({ product }: ICardProps) {
  const dispatch = useDispatch();

  function handleAddToCart(product: Product) {
    dispatch(addProductToCart(product));
  }

  return (
    <Container>
      <PhotoContainer>
        <Image
          src={product.image}
          width={170}
          height={215}
          layout="responsive"
          priority
        />
      </PhotoContainer>
      <Info>
        <strong>{product.title}</strong>
        <p className="description">
          <strong>Description:</strong> Lightweight perfet for trip or casual
          wear---Long sleeve with hooded, adjustable drawstring waist design.
        </p>
        <p className="rating">
          <strong>rating:</strong>
          <span>
            <AiFillStar color="#FFB800" />
            <AiFillStar color="#FFB800" />
            <AiFillStar color="#FFB800" />
            <AiFillStar color="#FFB800" />
            <AiOutlineStar color="#FFB800" />
          </span>
        </p>
        <p>
          <strong>price: </strong>
          <span>$ 39.99</span>
        </p>
      </Info>
      <Button type="button" onClick={() => handleAddToCart(product)}>
        Add to cart
      </Button>
    </Container>
  );
}
