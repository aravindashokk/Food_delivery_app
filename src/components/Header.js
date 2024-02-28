import { Link } from "react-router-dom";
import Logo from "../assets/logo.PNG";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between shadow-lg">
            <div className="logo-container">
                <img className="w-20" src={Logo} alt="Feasty"/>
            </div>
            <div className="flex items-center ">
                <ul className="flex p-4 m-4">
                    <li className="px-4 font-bold">Online Status: {onlineStatus? "✔️" : "❌"}</li>
                    <li className="px-4 font-bold"><Link to="/">Home</Link></li>
                    <li className="px-4 font-bold"><Link to="/about">About us</Link></li>
                    <li className="px-4 font-bold"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 font-bold">Cart</li>
                    <button className="login font-bold " onClick={()=> { btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login") }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;