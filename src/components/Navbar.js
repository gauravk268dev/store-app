import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {  
  const navStyle = {
    color: "white"
  };

  return (
    <nav>
      <Link to="/" ><h3 style={ navStyle}>Logo</h3></Link>
      <ul className="nav-links">
        <Link to="/about"><li style={ navStyle}>About</li></Link>
        <Link to="/shop"><li style={ navStyle} >Shop</li></Link>
        <Link to="/contact"><li style={ navStyle} >Contact</li></Link>
      </ul>
    </nav>
  );
}

export default Navbar;
