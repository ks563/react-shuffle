import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar fixed-top bg-none">
            <div>
                <ul className="navbar-nav">
                    <h4>Score: {props.score} | Highscore: {props.highScore}</h4>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;