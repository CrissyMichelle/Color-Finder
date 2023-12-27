import React from "react";
import { Link } from "react-router-dom";

// takes in truth from ancestor component as props
// maps over the props array and links each color to its own page
function ColorsList({ colors }) {
    return (
        <div>
            <h2>
                Like Colors? Click on your favorite!
            </h2>
            <div>
                {colors.map(c => {
                    <div key={c.name} color={c.name}>
                        <h3>
                            <Link to={`/colors/${c.name.toLowerCase()}`}>
                                {c.name} <br />
                            </Link>
                        </h3>
                    </div>
                })}
            </div>
        </div>
    );
}

export default ColorsList;
