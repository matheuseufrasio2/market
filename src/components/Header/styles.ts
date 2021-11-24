import styled from "styled-components";

export const Container = styled.div`
  padding: 2.313rem 4.125rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  > a {
    font-size: 1.5rem;
    font-weight: 700;

    &:hover {
      filter: brightness(1.9);
    }
  }

  > div {
    display: flex;
    align-items: center;
    width: 10%;

    justify-content: space-between;

    > a {
      font-size: 0.875rem;
      font-weight: 400;

      &:hover {
        filter: brightness(1.9);
        text-decoration: underline;
      }
    }
  }

  span {
    background-color: #230f5b;

    width: 2.188rem;
    height: 2.188rem;
    border-radius: 50%;
  }
`;
