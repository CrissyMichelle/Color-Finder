import React from "react";
import { useParams } from "react-router-dom";
import ColorDetails from "./ColorDetails";

// accepts "colors" array as prop from state data managed by ancestor
function FilterColorsList({ colors }) {
    const { name } = useParams();

    if (name) {
        const currentColor = colors.find(
            c => c.name.toLowerCase() === name.toLowerCase()
        );
        return <ColorDetails color={currentColor} />;
    }

    return null;
}

export default FilterColorsList;
