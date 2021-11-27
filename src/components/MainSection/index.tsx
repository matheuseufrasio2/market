import { ChangeEvent } from "react";
import { Cards } from "components/Cards";
import { InputFilters } from "components/InputFilters";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "store";
import { ICartItem } from "store/modules/cart/types";
import { changeFilterByRating } from "store/modules/catalog/actions";
import { nextPage, previousPage } from "store/modules/catalog/actions";
import Product from "types/Product";
import {
  Container,
  MainContainers,
  ShopContainer,
  CartContainer,
  Cart,
  CartList,
  CartListItem,
  Filters,
  SelectFilters,
  ButtonsPages,
} from "./styles";

export function MainSection() {
  const dispatch = useDispatch();
  const itemsFiltered = useSelector<IState, Product[]>(
    (state) => state.catalog.itemsFiltered.products,
  );
  console.log(itemsFiltered.length);
  const itemsCart = useSelector<IState, ICartItem[]>(
    (state) => state.cart.items,
  );
  const totalFormatted = useSelector<IState, string>(
    (state) => state.cart.totalFormatted,
  );
  function handleNextPage() {
    const itemsPerPage = 3;
    const lastPage = Math.floor(itemsFiltered.length / itemsPerPage);
    dispatch(nextPage(lastPage));
  }

  function handlePreviousPage() {
    dispatch(previousPage());
  }

  function handleChangeFilterByRating(event: ChangeEvent<HTMLSelectElement>) {
    dispatch(changeFilterByRating(event.currentTarget.value));
  }

  return (
    <Container>
      <MainContainers>
        <ShopContainer>
          <Filters>
            <InputFilters />
            <SelectFilters>
              <select
                onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                  handleChangeFilterByRating(event)
                }
                name="filter_by"
                id="filter_by"
              >
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
          <Cards />
        </ShopContainer>
        <CartContainer>
          <Cart>
            <CartList>
              {itemsCart.map((item) => (
                <CartListItem key={item.product.id}>
                  <div>
                    <strong>Name: </strong>
                    <p>{item.product.title}</p>
                  </div>
                  <div>
                    <strong>Quantity: </strong>
                    <p>{item.quantity}</p>
                  </div>
                </CartListItem>
              ))}
            </CartList>
            <span>Total: {totalFormatted.replace("$", "$ ")}</span>
          </Cart>
        </CartContainer>
      </MainContainers>
      <ButtonsPages>
        <button onClick={handlePreviousPage}>Previous Page</button>
        <button onClick={handleNextPage}>Next Page</button>
      </ButtonsPages>
    </Container>
  );
}
