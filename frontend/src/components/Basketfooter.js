import { useSelector }  from "react-redux";

function Basketfooter() {

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;


    return (



    <div className="web-footer">
        <hr />
        <div className="footer-signoff">
            <p>This is a demo e-commerce app built with PostGres, Express, React and Node.js</p>
            <p><a href="https://github.com/BenXBB/BardStore"><img className="footericons" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" />Github repo</a></p>
            <p><a href="#"><img className="footericons" src="https://cdn-icons-png.flaticon.com/512/106/106852.png" alt="copywriteicon" />2022 BARDSTORE</a></p>
        </div>
        <hr />
        <div className='basket-footer'>
            <a href="/basket">
                <button className="cartbutton">
               <img id="shopping-basket" src="https://cdn-icons-png.flaticon.com/512/2636/2636890.png" alt="basket-icon" />
                <span className="cartcomponent">CART</span><span className="basketnumber">0</span>
                </button>
            </a>
        </div>
    </div>
    );
  }
  
  export default Basketfooter;
  