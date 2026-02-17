import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  min-height: 380px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  overflow: hidden;

  background: #fff;
  border-radius: 10px;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  cursor: pointer;

  /* Image */
  img {
    width: 100%;
    height: 75%;
    object-fit: cover;

    transition: all 0.3s ease;
  }

  /* Button */
  button {
    width: 80%;
    position: absolute;
    bottom: 60px;

    opacity: 0;
    visibility: hidden;

    transition: all 0.3s ease;
  }

  /* Hover Effects */
  &:hover {
    transform: translateY(-4px);

    img {
      opacity: 0.85;
      transform: scale(1.03);
    }

    button {
      opacity: 1;
      visibility: visible;
    }
  }

  /* Footer */
  .footer {
    width: 100%;
    height: 25%;

    padding: 0.8rem 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 16px;

    .name {
      width: 75%;
      font-weight: 500;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .price {
      width: 25%;
      text-align: right;
      font-weight: 600;
      color: #0d6efd;
    }
  }

  /* ================= TABLETS ================= */
  @media (max-width: 900px) {
    min-height: 350px;

    img {
      height: 70%;
    }

    .footer {
      font-size: 15px;
    }
  }

  /* ================= PHONES ================= */
  @media (max-width: 600px) {
    min-height: auto;

    img {
      height: 220px;
    }

    button {
      position: static;
      margin: 0.7rem 0 1rem;

      opacity: 1;
      visibility: visible;
      width: 90%;
    }

    .footer {
      padding: 0.7rem 0.8rem;
      font-size: 14px;
    }
  }

  /* ================= SMALL PHONES ================= */
  @media (max-width: 360px) {
    img {
      height: 200px;
    }

    .footer {
      font-size: 13px;
    }

    button {
      width: 95%;
    }
  }
`;
