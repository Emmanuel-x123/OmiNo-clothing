import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding: 0 10px;

  /* Tablet */
  @media (max-width: 768px) {
    height: 60px;
    margin-bottom: 15px;
  }

  /* Small phones */
  @media (max-width: 480px) {
    height: 55px;
    margin-bottom: 10px;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 25px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

export const Logo = styled.img`
  height: 50px;
  max-height: 100%;
  width: auto;

  @media (max-width: 768px) {
    height: 40px;
  }

  @media (max-width: 480px) {
    height: 32px;
  }
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;

  /* Tablet */
  @media (max-width: 768px) {
    width: auto;
    gap: 8px;
  }

  /* Phones */
  @media (max-width: 480px) {
    gap: 6px;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 15px;

  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px 8px;
    font-size: 13px;
  }
`;
