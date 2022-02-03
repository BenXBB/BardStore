import './Basket.css';

function CartItem({item, qtyChangeHandler, removeHandler}) {
    return (
    <div className="item-flex-box-child">
        <img className="basketimageitem" src={item.imageUrl} alt={item.name} />
         <p>{item.name}</p>
         <select value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
         </select>
         <p>£{item.price}</p>
         <button className="removebtn" onClick={() => removeHandler(item.product)}>Remove</button>
    </div>
    );
  }
  
  export default CartItem;
  