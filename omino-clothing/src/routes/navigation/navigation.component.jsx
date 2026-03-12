import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import logo from '../../assets/omino-logo.jpeg';

import {
  NavigationContainer,
  LogoContainer,
  Logo,
  NavLinksContainer,
  NavLink,
  Hamburger,
  SidebarContainer,
  CloseButton
} from './navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo src={logo} alt="Omino Logo" />
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
          <Hamburger onClick={toggleSidebar}>
            {isSidebarOpen ? '✕' : '☰'}
          </Hamburger>
        </NavLinksContainer>
      </NavigationContainer>

      {/* Sidebar */}
      <SidebarContainer $isOpen={isSidebarOpen}>
        <CloseButton onClick={toggleSidebar}>✕</CloseButton>
        <NavLink to='/shop' onClick={toggleSidebar}>SHOP</NavLink>
        {currentUser ? (
          <NavLink as='span' onClick={() => { signOutUser(); toggleSidebar(); }}>SIGN OUT</NavLink>
        ) : (
          <NavLink to='/auth' onClick={toggleSidebar}>SIGN IN</NavLink>
        )}
        <CartIcon />
      </SidebarContainer>

      {/* Cart Dropdown */}
      {isCartOpen && <CartDropdown />}

      <Outlet />
    </>
  );
};

export default Navigation;