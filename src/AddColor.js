import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ColorInput from "./ColorInput";

function AddColor({ addNewColor }) {
    const navigate = useNavigate();   
    const [colorName, setColorName] = useState('');

    const handleChange = (event) => {
        setColorName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newColor = {
            name: colorName,
            style: { backgroundColor: colorName }
        };

        addNewColor(newColor);
        navigate('/colors');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ColorInput
                    type="text"
                    name="color"
                    value={colorName}
                    onChange={handleChange}
                    placeholder="Please type in a color"
                />
                <button type="submit">Add Color</button>
            </form>
        </div>
    );
}

export default AddColor;
