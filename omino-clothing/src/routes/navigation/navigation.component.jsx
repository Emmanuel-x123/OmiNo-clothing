import { useContext } from "react";
import { Outlet } from "react-router-dom";
// import {ReactComponent as Ominologo} from '../../assets/omino-logo2.svg';
import logo from '../../assets/omino-logo.jpeg';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {NavigationContainer, NavLinksContainer, NavLink, LogoContainer, Logo} from './navigation.styles';


const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    
    return (
        <>
            <NavigationContainer>
                 <LogoContainer to='/'>
                     <Logo src={logo} alt="omino Logo" />
                      {/* <Ominologo className="logo" /> */}
                </LogoContainer>  
                 <NavLinksContainer>
                    <NavLink to='/shop'>SHOP</NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                    ) : (
                        <NavLink to='/auth'>SIGN IN</NavLink>
                    )}
                    <CartIcon />
                </NavLinksContainer>
              {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    )
}

export default Navigation;