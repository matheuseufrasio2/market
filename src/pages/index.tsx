import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { MainSection } from "components/MainSection";
import { api } from "services/api";
import type { GetStaticProps } from "next";
import React from "react";

import { Container, Main } from "../styles/pages/Home";
import Product from "types/Product";
import { addProductsToCatalog } from "store/modules/catalog/actions";

type HomeProps = {
  products: Product[];
};

export default function Home({ products }: HomeProps) {
  const dispatch = useDispatch();

  const handleAddProductsToCatalog = useCallback(() => {
    dispatch(addProductsToCatalog(products));
  }, [dispatch, products]);

  useEffect(() => {
    handleAddProductsToCatalog();
  }, [handleAddProductsToCatalog]);

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
  const products = response.data;

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
