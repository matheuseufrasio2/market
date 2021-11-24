import {
  Container,
  ShopContainer,
  CartContainer,
  Cart,
  CartList,
  CartListItem,
} from "./styles";

export function MainSection() {
  return (
    <Container>
      <ShopContainer>
        <h1>ShopContainer</h1>
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
