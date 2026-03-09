import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  min-height: 110px;

  display: grid;
  grid-template-columns: 120px 2fr 1fr 1fr 40px;
  align-items: center;

  padding: 18px 10px;

  border-bottom: 1px solid #f1f1f1;

  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;

  transition: background 0.2s ease;

  &:hover {
    background: #fafafa;
  }

  .image-container {
    width: 100px;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }

  .name {
    font-size: 16px;
    font-weight: 500;
    color: #222;
    padding-left: 10px;
  }

  .quantity {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    font-size: 16px;
    font-weight: 500;
  }

  .arrow {
    cursor: pointer;
    user-select: none;

    font-size: 20px;
    font-weight: bold;

    padding: 4px 10px;
    border-radius: 6px;

    transition: background 0.2s ease;

    &:hover {
      background: #f2f2f2;
    }
  }

  .value {
    min-width: 20px;
    text-align: center;
  }

  .price {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    color: #111;
  }

  .remove-button {
    font-size: 20px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: color 0.2s ease;

    &:hover {
      color: #e63946;
    }
  }

  /* Tablet */

  @media screen and (max-width: 900px) {
    grid-template-columns: 100px 2fr 1fr 1fr 35px;

    .image-container {
      width: 85px;
      height: 85px;
    }

    .name {
      font-size: 15px;
    }

    .price {
      font-size: 15px;
    }
  }

  /* Mobile */

  @media screen and (max-width: 600px) {
    grid-template-columns: 80px 1fr;
    grid-template-rows: auto auto auto;
    gap: 10px;

    padding: 15px 0;

    .image-container {
      grid-row: span 3;
      width: 75px;
      height: 75px;
    }

    .name {
      font-size: 15px;
      padding-left: 0;
    }

    .quantity {
      justify-content: flex-start;
    }

    .price {
      text-align: left;
      font-size: 15px;
    }

    .remove-button {
      position: absolute;
      right: 10px;
      margin-top: -5px;
    }
  }
`;