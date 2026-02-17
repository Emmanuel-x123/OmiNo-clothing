import styled from "styled-components";

/* Background Image */
export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  transition: transform 0.6s ease;
`;

/* Overlay Text Box */
export const Body = styled.div`
  min-height: 80px;
  padding: 0.6rem 1.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid black;
  background-color: white;

  opacity: 0.75;

  position: absolute;
  text-align: center;

  h2 {
    font-weight: 700;
    margin: 0 0 4px;

    font-size: clamp(16px, 3vw, 22px);

    color: #4a4a4a;
    text-transform: uppercase;
  }

  p {
    font-weight: 400;

    font-size: clamp(12px, 2.5vw, 16px);
  }

  /* Tablet */
  @media (max-width: 900px) {
    min-height: 70px;
    padding: 0.5rem 1rem;
  }

  /* Phone */
  @media (max-width: 600px) {
    min-height: 65px;
    padding: 0.4rem 0.8rem;
  }

  /* Small Phone */
  @media (max-width: 360px) {
    min-height: 60px;

    h2 {
      font-size: 14px;
    }

    p {
      font-size: 11px;
    }
  }
`;

/* Main Container */
export const DirectoryItemContainer = styled.div`
  width: 100%;
  min-width: 30%;
  height: 240px;

  flex: 1 1 30%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid black;

  margin: 0 7.5px 15px;

  overflow: hidden;
  position: relative;

  border-radius: 6px;

  transition: transform 0.3s ease;

  /* Hover (Desktop) */
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);

    & ${BackgroundImage} {
      transform: scale(1.1);
    }

    & ${Body} {
      opacity: 0.9;
    }
  }

  /* Tablet */
  @media (max-width: 900px) {
    height: 210px;
    flex: 1 1 45%;
  }

  /* Phone */
  @media (max-width: 600px) {
    height: 190px;
    flex: 1 1 100%;

    margin: 0 0 15px;
  }

  /* Small Phone */
  @media (max-width: 360px) {
    height: 170px;
  }

  /* Remove weird side margins on mobile */
  &:first-child,
  &:last-child {
    margin-left: 0;
    margin-right: 0;
  }
`;
