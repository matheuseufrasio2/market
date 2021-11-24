import Link from "next/link";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <Link href="/">
        <a>Market</a>
      </Link>
      <div>
        <Link href="/">
          <a>Store</a>
        </Link>
        <Link href="/">
          <a>My Account</a>
        </Link>
      </div>

      <span />
    </Container>
  );
}
