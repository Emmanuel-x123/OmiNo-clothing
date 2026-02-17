import styled from 'styled-components';

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;

  .category-title {
    font-size: 1.8rem;
    font-weight: 700;

    margin: 2.5rem 1.5rem 1rem;

    text-transform: capitalize;

    color: #111;

    border-left: 4px solid #000;
    padding-left: 12px;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
