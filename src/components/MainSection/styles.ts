import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin: 0 4.125rem 0 6.938rem;
  max-height: calc(100vh - 12.563rem);

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const MainContainers = styled.div`
  flex: 1;
  max-height: calc(100vh - 12.563rem);

  display: flex;
  align-items: flex-end;
  margin-bottom: 3.563rem;
`;

export const ShopContainer = styled.div`
  flex: 1;
  height: 100%;
  margin-right: 7.25rem;
  display: flex;
  flex-direction: column;
`;

export const CartContainer = styled.div`
  width: 221px;
  height: 31.563rem;

  display: flex;
  flex-direction: column;
`;

export const Cart = styled.div`
  height: 100%;
  width: 100%;
  align-self: flex-end;
  margin-top: auto;
  padding-top: 0.25rem;
  /* background-color: red; */
  border: 1px solid #230f5b;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  span {
    margin-top: auto;
    height: 4.25rem;
    background-color: #230f5b;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export const CartList = styled.ul`
  overflow-y: auto;
  flex: 1;
  list-style: none;
  padding: 1rem;
  padding-top: 0.75rem;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #230f5b;
    border-radius: 8px;
  }
`;

const appear = keyframes`
  0% { opacity: 0; transform: translateY(-300px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const CartListItem = styled.li`
  width: 100%;
  border: 1px solid #230f5b;
  padding: 1rem 0.8rem 2rem;
  border-radius: 8px;
  animation-duration: 0.5s;
  animation-name: ${appear};

  > div {
    display: flex;
    align-items: center;

    & + div {
      margin-top: 0.5rem;
    }

    strong {
      font-weight: 700;
      font-size: 0.8rem;
      margin-right: 0.3rem;
    }
    p {
      font-weight: 400;
      font-size: 0.8rem;
    }
  }

  & + li {
    margin-top: 1rem;
  }
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: column;
  width: 100%;
  padding: 2rem 0;
`;

export const SelectFilters = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 19.5rem;
  align-items: center;
  justify-content: space-between;

  select {
    background: #230f5b;
    color: #fff;
    border: 0;
    border-radius: 8px;

    font-size: 0.875rem;
    padding: 0.3rem 0;

    &:focus {
      outline: none;
    }

    &::-ms-expand {
      margin-right: 34rem;
    }

    & + select {
      margin-left: 2rem;
    }

    > option {
      padding: 1rem;
    }
  }
`;

export const ButtonsPages = styled.div`
  width: 638px;
  margin-right: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: 0;
    background-color: transparent;
    color: #230f5b;
    transition: all 0.2s;
    text-decoration: underline;

    &:hover {
      filter: brightness(1.9);
    }

    & + button {
      margin-left: 2rem;
    }
  }
`;
