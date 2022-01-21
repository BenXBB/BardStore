import './Basket.css';

function CartItem() {
    return (
    <div className="item-flex-box-child">
        <img className="basketimageitem" src="https://5.imimg.com/data5/VP/CN/MY-2807545/sitar-500x500.jpg" alt="sitar1" />
         <p>SITAR</p>
         <select>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
         </select>
         <p>£1,000</p>
         <button className="removebtn">Remove</button>
    </div>
    );
  }
  
  export default CartItem;
  