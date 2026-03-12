import { Link } from "react-router-dom";
import styled from "styled-components";

/* ==================== NAVBAR ==================== */
export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: white;
  border-bottom: 1px solid #eee;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;

  @media (max-width: 768px) {
    height: 60px;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    height: 55px;
    padding: 0 12px;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 50px;
  width: auto;

  @media (max-width: 768px) { height: 40px; }
  @media (max-width: 480px) { height: 32px; }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const NavLink = styled(Link)`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 15px;

  &:hover { color: #111; }

  @media (max-width: 768px) { font-size: 14px; padding: 6px 10px; }
  @media (max-width: 480px) { font-size: 13px; padding: 4px 8px; }
`;

/* ==================== HAMBURGER ==================== */
export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  @media (max-width: 768px) {
    display: block;
    margin-left: 10px;
  }
`;

/* ==================== SIDEBAR ==================== */
export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  width: 280px;
  height: 100vh;
  background: #fff;
  box-shadow: 2px 0 12px rgba(0,0,0,0.2);
  transition: left 0.3s ease;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 70px 20px;
  gap: 15px;
`;

/* ==================== CLOSE BUTTON ==================== */
export const CloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: -50px;
  width: 36px;
  height: 36px;
  background: #111;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1500;
`;