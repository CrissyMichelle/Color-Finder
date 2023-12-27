import React from "react";
import { NavLink } from "react-router-dom";

// component accepts data from App as prop
// and returns a list of available colors
function NavBar({ colors = [], addNewColor }) {
    // render a placeholder in case colors array breaks map()
    if (!colors) {
        return (
        <div>
            Loading... ...
        </div>
        );
    }

    const links = colors.map(color => (
        <NavLink key={color.name} to={`/colors/${color.name.toLowerCase()}`}>
            {color.name} <br />
        </NavLink>
    ));

    return (
        <nav>
            { links }
        </nav>
    );
}

export default NavBar;
