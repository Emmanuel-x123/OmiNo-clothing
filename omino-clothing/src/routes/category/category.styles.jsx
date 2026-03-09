import styled from "styled-components";

export const CategoryTitle = styled.h2`
  font-size: clamp(1.5rem, 2.5vw, 2.2rem);
  font-weight: 700;
  letter-spacing: 0.5px;
  margin: 20px 0 35px;
  color: #111;
  text-transform: capitalize;

  @media screen and (max-width: 900px) {
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.4rem;
    margin-bottom: 25px;
  }
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 0.5rem 0 2rem;
  width: 100%;
  align-items: stretch;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    padding: 0 0.5rem 2rem;
  }
`;