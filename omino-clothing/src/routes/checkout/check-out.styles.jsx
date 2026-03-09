import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 65%;
  max-width: 1000px;
  min-height: 90vh;

  display: flex;
  flex-direction: column;

  margin: 60px auto;
  padding: 30px;

  background: #ffffff;

  border-radius: 12px;

  box-shadow: 0 12px 35px rgba(0,0,0,0.05);

  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;

  @media screen and (max-width: 900px) {
    width: 90%;
    padding: 25px;
  }

  @media screen and (max-width: 600px) {
    width: 95%;
    margin: 30px auto;
    padding: 20px;
    box-shadow: none;
  }
`;

export const CheckoutTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;

  margin-bottom: 25px;

  color: #111;

  letter-spacing: -0.5px;

  @media screen and (max-width: 600px) {
    font-size: 24px;
    text-align: center;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 120px 2fr 1fr 1fr 40px;

  padding: 15px 10px;

  border-bottom: 2px solid #f1f1f1;

  font-size: 13px;
  font-weight: 600;

  text-transform: uppercase;
  letter-spacing: 0.5px;

  color: #666;

  background: #fafafa;

  border-radius: 8px;

  margin-bottom: 10px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    justify-content: flex-start;
    padding-left: 10px;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 40px;

  display: flex;
  justify-content: flex-end;

  padding-top: 20px;

  border-top: 1px solid #eee;

  position: sticky;

  bottom: 0;

  background: white;

  padding-bottom: 10px;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const Total = styled.span`
  font-size: 28px;
  font-weight: 700;

  color: #111;

  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

export const EmptyCart = styled.div`
  width: 100%;

  text-align: center;

  padding: 80px 20px;

  color: #777;

  font-size: 18px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  span {
    font-size: 15px;
    color: #999;
  }
`;