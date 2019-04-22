import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar fixed-topnavbar-expand-lg navbar-light bg-light">
            <div>
                <ul className="navbar-nav">
                    <h4>Score: {props.score} | Top Score: {props.highScore}</h4>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;