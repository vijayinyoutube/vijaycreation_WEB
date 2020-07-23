import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar";
import Welcome from "./components/Welcome";
import AOI from "./components/AOI";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Welcome></Welcome>
      <AOI></AOI>
    </div>
  );
}

export default App;
