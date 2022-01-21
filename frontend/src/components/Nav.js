
function Navbar() {
    return (
      <div className='navigation-bar'>
        <ul>
            <a href="/#lutes"><li>LUTES</li></a>
            <a href="/#hurdy-gurdy"><li>HURDY GURDY</li></a>
            <a href="/#bag-pipes"><li>BAG PIPES</li></a>
            <a href="/#sitars"><li>SITARS</li></a>
            <a href="/#accessories"><li>ACCESSORIES</li></a>
            <li><input type="text" name="search" placeholder="Search the store..." />
            <button type="submit">Go</button>
            </li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;
  