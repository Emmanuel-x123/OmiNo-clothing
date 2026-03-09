import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartDropDownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles';


const CartDropdown = () => {
   const cartItems = useSelector(selectCartItems)
  
    const navigate = useNavigate();

    const goToCheckoutHandler = () => navigate('/checkout');
    
  return (
    <CartDropDownContainer>
        <CartItems>
            {
                cartItems.length ? (
                 cartItems.map((item) =><CartItem key={item.id} CartItem={item}/>)
                ): (
                  <EmptyMessage>The Cart Is Empty</EmptyMessage> 
                )
            }
        </CartItems>
        <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
    </CartDropDownContainer>
  )
}

export default CartDropdown;