import styled from "styled-components";

export const Container = styled.div`
  height: 28.125rem;
  width: 200px;

  border: 1px solid #230f5b;
  border-radius: 8px;

  padding: 0.875rem 0.938rem 1.188rem;

  display: flex;
  flex-direction: column;
`;

export const Info = styled.div`
  margin-top: 0.813rem;
  margin: 0 10px;

  .description {
    margin-top: 0.5rem;
    width: 9.063rem;
  }

  .rating {
    display: flex;
    align-items: center;

    > span {
      display: flex;
      align-items: center;
      margin-left: 0.2rem;
    }
  }

  > strong {
    font-size: 0.875rem;
  }
  p {
    font-size: 0.75rem;

    & + p {
      margin-top: 0.313rem;
    }
  }
`;

export const Button = styled.button`
  overflow: hidden;
  margin-top: auto;

  height: 2.75rem;

  border: 0;
  background-color: #230f5b;
  color: #fff;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    filter: brightness(1.9);
  }
`;
