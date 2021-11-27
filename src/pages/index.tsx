import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { MainSection } from "components/MainSection";
import { api } from "services/api";
import type { GetStaticProps } from "next";
import React from "react";

import { Container, Main } from "../styles/pages/Home";
import { addProductsToCatalog } from "store/modules/catalog/actions";
import Product from "types/Product";
import { formatPrice } from "utils/format";

type HomeProps = {
  products: Product[];
};

export default function Home({ products }: HomeProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleAddProductsToCatalog = () => {
      dispatch(addProductsToCatalog(products));
    };
    handleAddProductsToCatalog();
  }, [dispatch, products]);

  return (
    <Container>
      <Main>
        <Header />
        <MainSection />
      </Main>
      <Footer />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/products");
  const data = response.data;

  const products = data.map((product: Product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    priceFormatted: formatPrice(product.price),
    description: product.description,
    description5words:
      product.description.split(" ").splice(0, 5).join(" ") + "...",
    category: product.category,
    image: product.image,
    rating: product.rating,
  }));

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
