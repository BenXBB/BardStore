import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

function Product({imageUrl, name, price, dispatched, availability, productId, match, history}) {

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(productId));
    history.push("/basket");
  }

    return (
      <div className='flex-item-box'>
          <img className="item-for-sale" src ={imageUrl} alt={name} />

            <div className="itemInfo">
              <h1>{name}</h1>
              <p>{availability}</p>
              <p>{dispatched}</p>
              <p>£{price}</p>
              <Link to={`/product/${productId}`} className="info_button">View</Link>
            </div>

        <button type="button" onClick={addToCartHandler}>ADD TO CART</button>
      </div>
    );
  }
  
  export default Product;