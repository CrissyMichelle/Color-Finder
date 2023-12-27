import React from "react";

function ColorInput({ name, value, onChange, placeholder }) {
    return (
        <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

export default ColorInput;
