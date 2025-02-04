import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
const Navbar = () => {
return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="Logo" />
            <p>SHOPE IT</p>
        </div>
        <div className="nav-menu">
                <li>SHOP </li>
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
        </div>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="Cart Icon" />
        </div>
    </div>
);
};

export default Navbar;
