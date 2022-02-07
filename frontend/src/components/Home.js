import Product from "./Product";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../redux/actions/productActions";

function Home({match, history}) {

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

    return (

      <div className='home-page'>

      <div className="flex-item-box-parent">
          {loading ? 
            <h2>Loading...</h2> 
            : error ? 
            <h2>{error}</h2> 
            : 
            products.map((product) => <Product 
            key={product._id} 
            productId={product._id}
            name={product.name}
            price={product.price}
            dispatched={product.dispatched}
            availability={product.availability}
            imageUrl={product.imageUrl}
            />
            )}
        </div>
      </div>
    );
  }
  
  export default Home;
  