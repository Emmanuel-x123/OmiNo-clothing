import styled from "styled-components";

/* ============================= */
/* ===== DESIGN TOKENS ===== */
/* ============================= */

const radiusSm = "6px";
const radiusMd = "10px";
const radiusLg = "12px";

const textPrimary = "#111";
const textSecondary = "#555";

const borderColor = "#eaeaea";
const bgHover = "#fafafa";
const bgSoft = "#f7f7f7";

const danger = "#d62828";
const dangerSoft = "#fff0f0";

/* ============================= */
/* ===== MAIN CONTAINER ===== */
/* ============================= */

export const CheckoutItemContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1.2fr 2fr 1fr 1fr 0.6fr;

  align-items: center;

  min-height: 88px;

  padding: 14px 12px;

  border-bottom: 1px solid ${borderColor};

  font-size: 14px;

  color: ${textPrimary};

  transition: background 0.15s ease;

  &:hover {
    background: ${bgHover};
  }

  /* ===================== */
  /* IMAGE */
  /* ===================== */

  .image-container {
    width: 100%;
    height: 72px;

    display: flex;
    align-items: center;

    img {
      width: 64px;
      height: 64px;

      object-fit: cover;

      border-radius: ${radiusSm};

      border: 1px solid ${borderColor};

      background: ${bgSoft};
    }
  }

  /* ===================== */
  /* NAME */
  /* ===================== */

  .name {
    font-weight: 600;

    font-size: 14px;

    line-height: 1.4;

    padding-right: 12px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* ===================== */
  /* QUANTITY */
  /* ===================== */

  .quantity {
    display: flex;

    align-items: center;
    justify-content: center;

    gap: 12px;

    .arrow {
      width: 28px;
      height: 28px;

      border-radius: 50%;

      background: ${bgSoft};

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 12px;

      cursor: pointer;

      transition: all 0.15s ease;

      &:hover {
        background: ${textPrimary};
        color: white;
      }

      &:active {
        transform: scale(0.92);
      }
    }

    .value {
      min-width: 26px;

      text-align: center;

      font-weight: 600;

      font-size: 13px;
    }
  }

  /* ===================== */
  /* PRICE */
  /* ===================== */

  .price {
    text-align: center;

    font-weight: 600;

    font-size: 13px;
  }

  /* ===================== */
  /* REMOVE */
  /* ===================== */

  .remove-button {
    width: 28px;
    height: 28px;

    border-radius: 50%;

    background: ${dangerSoft};

    color: ${danger};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 13px;

    cursor: pointer;

    transition: all 0.15s ease;

    &:hover {
      background: ${danger};
      color: white;
    }

    &:active {
      transform: scale(0.9);
    }
  }

  /* ============================= */
  /* ===== TABLET ===== */
  /* ============================= */

  @media (max-width: 900px) {
    grid-template-columns: 1fr 2fr 1fr 1fr 0.5fr;

    font-size: 13px;

    padding: 12px 10px;

    .image-container img {
      width: 56px;
      height: 56px;
    }
  }

  /* ============================= */
  /* ===== MOBILE ===== */
  /* ============================= */

  @media (max-width: 600px) {
    grid-template-columns: 90px 1fr;

    grid-template-areas:
      "image name"
      "image price"
      "image quantity"
      "remove remove";

    column-gap: 16px;
    row-gap: 8px;

    padding: 16px;

    border: 1px solid ${borderColor};

    border-radius: ${radiusLg};

    margin-bottom: 18px;

    background: white;

    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    /* IMAGE */

    .image-container {
      grid-area: image;

      img {
        width: 86px;
        height: 86px;

        border-radius: ${radiusMd};
      }
    }

    /* NAME */

    .name {
      grid-area: name;

      font-size: 15px;

      font-weight: 600;

      white-space: normal;
    }

    /* PRICE */

    .price {
      grid-area: price;

      font-size: 14px;

      color: ${textSecondary};
    }

    /* QUANTITY */

    .quantity {
      grid-area: quantity;

      justify-content: flex-start;

      gap: 14px;

      .arrow {
        width: 30px;
        height: 30px;

        font-size: 13px;
      }
    }

    /* REMOVE */

    .remove-button {
      grid-area: remove;

      margin-top: 6px;

      width: 100%;

      height: 38px;

      border-radius: ${radiusMd};

      font-size: 13px;

      font-weight: 600;

      letter-spacing: 0.4px;

      border: 1px solid #ffd6d6;
    }
  }
`;
