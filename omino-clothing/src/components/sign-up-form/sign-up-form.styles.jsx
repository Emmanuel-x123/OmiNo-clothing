import styled from 'styled-components';

/* Main Container */
export const SignUpContainer = styled.div`
  width: 100%;
  max-width: 420px;

  margin: 0 auto;
  padding: 2rem 1.5rem;

  display: flex;
  flex-direction: column;

  background: #ffffff;

  border-radius: 12px;

  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);

  transition: all 0.25s ease;

  h2 {
    margin-bottom: 6px;

    font-size: clamp(20px, 3vw, 26px);

    font-weight: 700;

    color: #111;
  }

  span {
    margin-bottom: 1.5rem;

    font-size: clamp(13px, 2.5vw, 15px);

    color: #666;
  }

  /* Tablet */
  @media (max-width: 900px) {
    max-width: 380px;
    padding: 1.7rem 1.3rem;
  }

  /* Mobile */
  @media (max-width: 600px) {
    max-width: 100%;

    margin: 0 1rem;

    padding: 1.5rem 1.2rem;

    border-radius: 10px;
  }

  /* Small Phones */
  @media (max-width: 360px) {
    padding: 1.2rem 1rem;
  }
`;
