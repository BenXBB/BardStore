import './Login.css';

function LoginPage() {
    return (
      <div className="login">
      <h1>Login</h1>
      <form method="post" action="">
        <p><input type="text" name="login" value="" placeholder="Username or Email" /></p>
        <p><input type="password" name="password" value="" placeholder="Password" /></p>
        <p className="remember_me">
        </p>
        <p className="submit"><input type="submit" name="commit" value="Login" /></p>
      </form>
      <button type="button" className="login-with-google-btn" >Sign in with Google</button>
    </div>
    );
  }
  
  export default LoginPage;
  