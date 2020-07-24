import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar";
import Welcome from "./components/Welcome";
import AOI from "./components/AOI";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import Feature4 from "./components/Feature4";
import Feature5 from "./components/Feature5";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Welcome></Welcome>
      <AOI></AOI>
      <Feature1></Feature1>
      <Feature2></Feature2>
      <Feature3></Feature3>
      <Feature4></Feature4>
      <Feature5></Feature5>
    </div>
  );
}

export default App;
