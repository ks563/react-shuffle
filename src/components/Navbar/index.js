import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/">Click and Shuffle</a>
                    </li>
                    <li className="nav-item">Click an Image to Begin!
                    </li>
                    <li className="nav-item">
                    </li>
                    <li className="nav-item">
                        Score: {props.score} | Top Score: {props.highScore}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;