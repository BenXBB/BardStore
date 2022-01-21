import { Link } from "react-router-dom";

function Product() {
    return (
      <div className='flex-item-box'>
          <img className="item-for-sale" src ="https://cdn.shopify.com/s/files/1/1814/0429/products/hurdy-gurdies-musicmakers-hurdy-gurdy-w-gig-bag-13709818331232.jpg?v=1575933152" alt="" />

            <div className="itemInfo">
              <h1>HURDY GURDY "RUSTIC"</h1>
              <p>Availability: On demand</p>
              <p>Dispatched within: Waiting list</p>
              <p>£1,050</p>
              <Link to={`/product/${1111}`} className="info_button">View</Link>
            </div>

        <button>ADD TO CART</button>
      </div>
    );
  }
  
  export default Product;