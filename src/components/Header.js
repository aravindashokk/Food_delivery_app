import Logo from "../assets/logo.PNG";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={Logo} alt="Feasty"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;