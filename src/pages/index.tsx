import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { MainSection } from "components/MainSection";
import type { NextPage } from "next";
import React from "react";

import { Container } from "../styles/pages/Home";

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <MainSection />
      <Footer />
    </Container>
  );
};

export default Home;
