import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid #230f5b;
  height: 2.5rem;
  width: 19.5rem;
  border-radius: 8px;

  input {
    flex: 1;
    background-color: transparent;
    border: 0;
    padding: 0 0.5rem;

    &:focus {
      outline: none;
    }
  }

  > svg {
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`;
