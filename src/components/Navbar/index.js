import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
                <ul className="navbar-nav">
                    <span class="navbar-text"><a href="/">Clicky Game</a></span>
                    <span class="navbar-text"> Click an Image to Begin!</span>
                    <span class="navbar-text">Score: {props.score} | Top Score: {props.highScore}</span>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;