import React, { Component } from "react";
import "./style.css";

class Card extends Component {
    constructor(props) {
        super(props);

        return (
            <div
                className="card"
                style={{
                    backgroundImage: props.image ? `url$(${props.image})` : "none"
                }}
            >
                {/* set onClick for the entire card */}
            </div>
        )
    }
}

export default Card;