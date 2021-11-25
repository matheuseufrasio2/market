import Image from "next/image";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { Button, Container, Info } from "./styles";

export function Card() {
  function handleAddToCart() {
    console.log("Add to cart");
  }

  return (
    <Container>
      <Image
        src="/img/image1.png"
        width={170}
        height={215}
        layout="responsive"
        priority
      />
      <Info>
        <strong>Mens Casual</strong>
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
      <Button type="button" onClick={handleAddToCart}>
        Add to cart
      </Button>
    </Container>
  );
}
