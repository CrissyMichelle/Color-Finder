import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.jpeg";
import NavBar from "./NavBar";
import AddColor from "./AddColor";
import Home from "./Home";
import ColorDetails from "./ColorDetails";
import "./App.css";

// array with colors
const colorProps = [
  {
    name: "Aquamarine",
    style: { backgroundColor: 'aquamarine' }
  },
  {
    name: "Black",
    style: { backgroundColor: 'black' }
  },
  {
    name: "DodgerBlue",
    style: { backgroundColor: 'dodgerblue' }
  },
  {
    name: "Red",
    style: { backgroundColor: 'red' }
  },
  {
    name: "RebeccaPurple",
    style: { backgroundColor: 'rebeccapurple' }
  }
];

function App() {
  // manages the data for all colors available in the app
  const [colors, setColors] = useState({
    data: null,
    isLoading: true
  });

  // API call could go here; instead data comes from colorProps
  useEffect(() => {
    async function loadColors() {
      try {
        const response = await axios.get("http://localhost:5001/mockAPI/colors-fake");
        setColors({
          data: response.data,
          isLoading: false
        });
      } catch (error) {
        console.error("Error fetching data: ", error);
        setColors({
          data: colorProps,
          isLoading: false
        });
      }
    };   
    loadColors();
  }, []); // empty array (no dependencies) means effect runs on initial mounting

  // function for accepting user input and passing down to child components
  // "lifting state up" from lower components
  const addNewColor = (newColor) => {
    setColors((prevColors) => ({
      ...prevColors,
      data: [newColor, ...prevColors.data]
    }));
  };

  // render HTML for selecting link from list, based on colors available
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/colors/new" element={
          <>
            <Header />
            <AddColor addNewColor={addNewColor} />
          </>
        } />
        <Route path="/colors/:colorName" element={<ColorDetails colors={colors.data} />} />
        <Route path="/colors/"  element={
          <>
            <Header />
            <h1>
              <Link to="/colors/new">Add new color!</Link>
            </h1>  
            <NavBar colors={colors.data} addNewColor={addNewColor} />
            <Home colors={colors} addNewColor={addNewColor} />
            <Header />
          </>
        } />
      </Routes>
        
    </BrowserRouter>
  );
}

function Header() {
  return(
    <header className="App=header">
      <img src={logo} className="App-logo" alt="logo" />
      <h3>Welcome to the Color Factory!</h3>
    </header>
  )
}

export default App;
