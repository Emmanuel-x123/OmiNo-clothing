import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  grid-template-columns: repeat(4, 1fr);
  column-gap: 16px;
  row-gap: 50px;
  padding: 0 20px;

  /* Category Title */
  .category-title {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 2.5rem 1.5rem 1rem;
    text-transform: capitalize;
    color: #111;
    border-left: 4px solid #000;
    padding-left: 12px;
  }

  /* Large screens / laptops */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Tablets */
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);

    .category-title {
      font-size: 1.6rem;
      margin: 2rem 1rem 1rem;
    }
  }

  /* Phones */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    column-gap: 12px;
    row-gap: 35px;
    padding: 0 15px;

    .category-title {
      font-size: 1.4rem;
      margin: 1.5rem 0.5rem 0.8rem;
      border-left: 3px solid #000;
    }
  }

  /* Small phones (iPhone SE, mini phones) */
  @media (max-width: 360px) {
    row-gap: 25px;
    padding: 0 10px;

    .category-title {
      font-size: 1.25rem;
      padding-left: 8px;
    }
  }
`;
