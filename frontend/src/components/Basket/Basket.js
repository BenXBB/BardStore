import './Basket.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";

function Basket() {

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart; 

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty))
  }

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  }

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  }

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0)
  }

    return (
    <div className='basket-page'>
      <h3 className="basketheadertext">Shopping Cart</h3>
      <div className="basket-flex-box-parent">

        {cartItems.length === 0 ? (
          <div>Your cart is empty <Link to="/">Go Back</Link></div>
        )
          : cartItems.map(item => (
            <CartItem 
              item={item} 
              qtyChangeHandler={qtyChangeHandler} 
              removeHandler={removeHandler}
            />
          ))}

         <div className="checkout-section">
          <h3>Subtotal ({getCartCount()}) item(s)</h3>
          <p><h3>£{getCartSubTotal().toFixed(2)} <span className="VATtext">ex VAT</span></h3></p>
          <button className="checkoutbtn">Proceed To Checkout</button>
          </div>
        </div>
    </div>
    );
  }
  
  export default Basket;
  