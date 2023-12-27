import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";

// uses "colors" data from ancestor component as a prop
// and renders a page w/ matching css color
function ColorDetails({ colors }) {
    const { colorName } = useParams();

    const color = colors.find(
        c => c.name.toLowerCase() === colorName.toLowerCase()
    );
    if (!color) return <Navigate to="/colors" />

    return (
        <div>
            <div style={color.style}>
                <h1 style={{ textAlign: "center", fontSize: "55px" }}>
                    {color.name}
                </h1>
            </div>
            <Link to="/colors">Go Back</Link>
        </div>
    );
}

export default ColorDetails;
