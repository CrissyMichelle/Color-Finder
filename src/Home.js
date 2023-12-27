import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ColorsList from "./ColorsList";
import FilterColorsList from "./FilterColorsList";
import AddColor from "./AddColor";

function Home({ colors, addNewColor }) {
    return (
        <Routes>
            <Route path="/colors/new" element={<AddColor addNewColor={addNewColor} />} />
            <Route path="/colors/:name" element={<FilterColorsList colors={colors} />} />
            <Route path="/*" element={<Navigate to="/colors" />} />
        </Routes>
    );
}

export default Home;
