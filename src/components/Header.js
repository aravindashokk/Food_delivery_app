import { Link } from "react-router-dom";
import Logo from "../assets/logo.PNG";
import "./Header.css";
import { useState } from "react";


const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login")

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={Logo} alt="Feasty"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=> { btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login") }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;