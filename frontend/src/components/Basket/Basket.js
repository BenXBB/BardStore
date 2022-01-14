import './Basket.css';

function Basket() {
    return (
    <div className='basket-page'>
      <h3>Your Basket:</h3>

        <div className="item-flex-box-parent">

          <div className="item-flex-box-child">
           <img className="basketimageitem" src="https://5.imimg.com/data5/VP/CN/MY-2807545/sitar-500x500.jpg" alt="sitar1" />
            <p>SITAR</p>
            <p>£1,000</p>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button className="removebtn">Remove</button>
          </div>
      </div>
      <h3>Total price £1,000</h3>
      <button className="checkoutbtn">Checkout</button>
    </div>
    );
  }
  
  export default Basket;
  