import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Khanka driving school</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>

    );
}
 
export default Navbar;