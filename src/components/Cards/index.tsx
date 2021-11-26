import { useSelector } from "react-redux";

import { Card } from "components/Card";
import { IState } from "store";
import { Container } from "./styles";
import Product from "types/Product";

export function Cards() {
  const catalog = useSelector<IState, Product[]>(
    (state) => state.catalog.items,
  );
  const currentPage = useSelector<IState, number>((state) => state.page);

  const itemsPerPage = 3;

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;

  const currentProducts = catalog.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Container>
      {currentProducts.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </Container>
  );
}
