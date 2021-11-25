import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { MainSection } from "components/MainSection";
import type { NextPage } from "next";
import React from "react";

import { Container, Main } from "../styles/pages/Home";

const Home: NextPage = () => {
  return (
    <Container>
      <Main>
        <Header />
        <MainSection />
      </Main>
      <Footer />
    </Container>
  );
};

export default Home;
