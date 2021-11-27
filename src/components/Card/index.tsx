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
  const numberOfStars = Math.ceil(product.rating.rate);

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
        />
      </PhotoContainer>
      <Info>
        <strong>{product.title}</strong>
        <p className="description">
          <strong>Description:</strong> {product.description5words}
        </p>
        <p className="rating">
          <strong>rating:</strong>
          <span>
            {
              {
                1: (
                  <>
                    <AiFillStar color="#FFB800" />
                    <AiOutlineStar color="#FFB800" />
                    <AiOutlineStar color="#FFB800" />
                    <AiOutlineStar color="#FFB800" />
                    <AiOutlineStar color="#FFB800" />
                  </>
                ),
                2: (
                  <>
                    <AiFillStar color="#FFB800" />
                    <AiFillStar color="#FFB800" />
                    <AiOutlineStar color="#FFB800" />
                    <AiOutlineStar color="#FFB800" />
                    <AiOutlineStar color="#FFB800" />
                  </>
                ),
                3: (
                  <>
                    <AiFillStar color="#FFB800" />
                    <AiFillStar color="#FFB800" />
                    <AiFillStar color="#FFB800" />
                    <AiOutlineStar color="#FFB800" />
                    <AiOutlineStar color="#FFB800" />
                  </>
                ),
                4: (
                  <>
                    <AiFillStar color="#FFB800" />
                    <AiFillStar color="#FFB800" />
                    <AiFillStar color="#FFB800" />
                    <AiFillStar color="#FFB800" />
                    <AiOutlineStar color="#FFB800" />
                  </>
                ),
                5: (
                  <>
                    <AiFillStar color="#FFB800" />
                    <AiFillStar color="#FFB800" />
                    <AiFillStar color="#FFB800" />
                    <AiFillStar color="#FFB800" />
                    <AiFillStar color="#FFB800" />
                  </>
                ),
              }[numberOfStars]
            }
          </span>
        </p>
        <p>
          <strong>price: </strong>
          <span>{product.priceFormatted?.replace("$", "$ ")}</span>
        </p>
      </Info>
      <Button type="button" onClick={() => handleAddToCart(product)}>
        Add to cart
      </Button>
    </Container>
  );
}
