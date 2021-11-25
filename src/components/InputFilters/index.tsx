import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";

export function InputFilters() {
  return (
    <Container>
      <input type="text" />
      <FiSearch />
    </Container>
  );
}
