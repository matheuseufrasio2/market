import { useSelector } from "react-redux";

import { Card } from "components/Card";
import { IState } from "store";
import { Container } from "./styles";
import Product from "types/Product";

export function CardsEmpty() {
  return (
    <Container>
      <h1>CardEMpt</h1>
    </Container>
  );
}

export function Cards() {
  const productsFiltered = useSelector<IState, Product[]>(
    (state) => state.catalog.itemsFiltered.products,
  );

  const currentPage = useSelector<IState, number>(
    (state) => state.catalog.page,
  );

  const itemsPerPage = 3;

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;

  const currentProducts = productsFiltered.slice(
    indexOfFirstPost,
    indexOfLastPost,
  );

  return (
    <>
      {currentProducts ? (
        <Container>
          {currentProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </Container>
      ) : (
        <CardsEmpty />
      )}
    </>
  );
}
