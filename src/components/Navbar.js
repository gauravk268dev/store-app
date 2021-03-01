import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-item nav-item brand">Store</div>
      <div className="navbar-item"> </div>
      <div className="navbar-item navbar-link-wrapper" >
        <div className="navbar-link nav-item" ><a>About</a></div>
        <div className="navbar-link nav-item" >Shop</div>
        <div className="navbar-link nav-item" >Contact</div>
      </div>
    </div>
  );
}

export default Navbar;