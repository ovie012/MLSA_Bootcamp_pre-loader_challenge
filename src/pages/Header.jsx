import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Header () {
    const [toggle, setToggle] = useState(false);

    const toggleNavvBar = () => {
        setToggle(!toggle);
    };

    return (
        <>
            <header>
                <h1 className="logo">
                    <Link to='/'>MLSA</Link>
                </h1>
                <nav className="nav">
                    <h4>
                        <NavLink to='/'>Home</NavLink>
                    </h4>
                    <h4>
                        <NavLink to='/About'>About</NavLink>
                    </h4>
                    <h4>
                        <NavLink to='/ContactUs'>Contact Us</NavLink>
                    </h4>
                    <h4>
                        <NavLink to='/Privacy'>Privacy</NavLink>
                    </h4>
                </nav>
                <span onClick={toggleNavvBar} className="open-nav"></span>
                <nav className={`mobile-nav ${toggle ? 'active' : ''}`}>
                    <span onClick={toggleNavvBar} className="close-nav"></span>
                    <h4>
                        <NavLink to='/'>Home</NavLink>
                    </h4>
                    <h4>
                        <NavLink to='/About'>About</NavLink>
                    </h4>
                    <h4>
                        <NavLink to='/ContactUs'>Contact Us</NavLink>
                    </h4>
                    <h4>
                        <NavLink to='/Privacy'>Privacy</NavLink>
                    </h4>
                </nav>
            </header>
        </>
    )
}

export default Header;