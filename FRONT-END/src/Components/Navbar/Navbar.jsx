import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () => {
    const {getTotalCartItems} = useContext(ShopContext)
return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="Logo" />
            <p>SHOPE IT</p>
        </div>
        <div className="nav-menu">
                <li><Link style={{ textDecoration: 'none', color: '#626262' }} to='/'>SHOP</Link></li>
                <li><Link style={{ textDecoration: 'none', color: '#626262' }} to='/mens'>MEN</Link></li>
                <li><Link style={{ textDecoration: 'none', color: '#626262' }} to='/womens'>WOMEN</Link></li>
                <li><Link style={{ textDecoration: 'none', color: '#626262' }} to='/kids'>KIDS</Link></li>
        </div>
        <div className="nav-login-cart">
            <Link to='/login'><button >Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="Cart Icon" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
);
};

export default Navbar;
