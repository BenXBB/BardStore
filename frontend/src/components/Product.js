import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import '../App.css';

function Product({imageUrl, name, price, dispatched, availability, productId, match, history}) {

  const dispatch = useDispatch();

  const addToCartHandler = () => {

    var element = document.getElementById("addedtobasketnotification")

    dispatch(addToCart(productId));
    element.style.color = "white";
    setTimeout(() => {
      element.style.color = "rgb(44, 44, 44)";
    }, 1500);
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