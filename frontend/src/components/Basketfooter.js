function Basketfooter() {
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
            <div>
                <a href="/basket"><p>SHOPPING CART: <span>0</span></p></a>
            </div>
            <a href="/basket"><img id="shopping-basket" src="https://cdn-icons-png.flaticon.com/512/2636/2636890.png" alt="basket-icon" /></a>
        </div>
    </div>
    );
  }
  
  export default Basketfooter;
  