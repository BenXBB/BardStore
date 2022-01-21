import './Basket.css';
import CartItem from './CartItem';

function Basket() {
    return (
    <div className='basket-page'>
      <h3 className="basketheadertext">Shopping Cart</h3>
      <div className="basket-flex-box-parent">
        <CartItem />
        <CartItem />
        <CartItem />
         <div className="checkout-section">
          <h3>Subtotal (1) item(s)</h3>
          <p><h3>£1,000 <span className="VATtext">ex VAT</span></h3></p>
          <button className="checkoutbtn">Proceed To Checkout</button>
          </div>
        </div>
    </div>
    );
  }
  
  export default Basket;
  