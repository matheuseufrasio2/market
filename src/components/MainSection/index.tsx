import { InputFilters } from "components/InputFilters";
import { Card } from "../Card";
import {
  Container,
  ShopContainer,
  CartContainer,
  Cart,
  CartList,
  CartListItem,
  Cards,
  Filters,
  SelectFilters,
} from "./styles";

export function MainSection() {
  return (
    <Container>
      <ShopContainer>
        <Filters>
          <InputFilters />
          <SelectFilters>
            <select name="filter_by" id="filter_by">
              <option value="default">Filter by rating</option>
              <option value="1">1 star</option>
              <option value="2">+2 stars</option>
              <option value="3">+3 stars</option>
              <option value="4">+4 stars</option>
              <option value="5">5 stars</option>
            </select>
            <select name="filter_by" id="filter_by">
              <option value="default">Sorty by</option>
              <option value="1">Highest price</option>
              <option value="2">Lowest price</option>
            </select>
          </SelectFilters>
        </Filters>
        <Cards>
          <Card />
          <Card />
          <Card />
        </Cards>
      </ShopContainer>
      <CartContainer>
        <Cart>
          <CartList>
            <CartListItem>
              <div>
                <strong>Name: </strong>
                <p>Nome Exemplo</p>
              </div>
              <div>
                <strong>Quantity: </strong>
                <p>3</p>
              </div>
            </CartListItem>
          </CartList>
          <span>Total: R$ 1832,00</span>
        </Cart>
      </CartContainer>
    </Container>
  );
}
