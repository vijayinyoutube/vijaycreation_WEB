import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Welcome></Welcome>
    </div>
  );
}

export default App;
