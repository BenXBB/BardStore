
function Loginbanner({click}) {
    return (
        <header className="login-banner">
            <span className="headertitle">CONTACT US &nbsp;<img className="contactUsIcon" src="https://cdn-icons-png.flaticon.com/512/25/25453.png" alt="phone-us" />&nbsp;(+44) 01592 215632</span>
            <span className="headertitle">EMAIL &nbsp;<img className="contactUsIcon" src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="email-us" />&nbsp;SHOP@BARDSTORE.CO.UK</span>
            <span className="loginlink"><a href="/auth/login">CREATE AN ACCOUNT/SIGN IN</a></span>
        
            <div className="hamburger__menu" onClick={click}>
            <div></div>
            <div></div>
            <div></div>
            
        </div>
      </header>
    );
  }
  
  export default Loginbanner;