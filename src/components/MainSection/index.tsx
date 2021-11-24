import { Container, ShopContainer, CartContainer, Cart } from "./styles";

export function MainSection() {
  return (
    <Container>
      <ShopContainer>
        <h1>ShopContainer</h1>
      </ShopContainer>
      <CartContainer>
        <Cart>
          <ul>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
          </ul>
          <span>Total: R$ 1832,00</span>
        </Cart>
      </CartContainer>
    </Container>
  );
}
