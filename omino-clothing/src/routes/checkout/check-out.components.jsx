import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  CheckoutTitle,
  TotalContainer,
  EmptyCart
} from './check-out.styles';

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>

      <CheckoutTitle>Shopping Cart</CheckoutTitle>

      {cartItems.length === 0 ? (
        <EmptyCart>
          🛒 Your cart is empty
          <span>Add items to begin checkout</span>
        </EmptyCart>
      ) : (
        <>
          <CheckoutHeader>
            <HeaderBlock>
              <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Remove</span>
            </HeaderBlock>
          </CheckoutHeader>

          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
          ))}

          <TotalContainer>
            <Total>Total: ₦{cartTotal}</Total>
          </TotalContainer>
        </>
      )}

    </CheckoutContainer>
  );
};

export default CheckOut;