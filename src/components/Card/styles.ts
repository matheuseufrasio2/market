import styled, { keyframes } from "styled-components";

const appear = keyframes`
  0% { opacity: 0; transform: translateX(-50px); }
  100% { opacity: 1; transform: translateX(0); }
`;

export const Container = styled.div`
  height: 28.125rem;
  width: 200px;

  border: 1px solid #230f5b;
  border-radius: 8px;

  padding: 0.875rem 0.938rem 1.188rem;

  display: flex;
  flex-direction: column;
  animation-duration: 1s;
  animation-name: ${appear};
`;

export const PhotoContainer = styled.div`
  img {
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      110% {
        background-position: 40rem 0;
      }
    }
  }
`;

export const Info = styled.div`
  margin-top: 0.813rem;
  margin: 0 10px;
  max-height: 9.75rem;

  margin-bottom: auto;

  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #230f5b;
    border-radius: 8px;
  }

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
  height: 45px;

  border: 0;
  background-color: #230f5b;
  color: #fff;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    filter: brightness(1.9);
  }
`;
