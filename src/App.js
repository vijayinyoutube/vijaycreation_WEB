import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar";
import Welcome from "./components/Welcome";
import AOI from "./components/AOI";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Welcome></Welcome>
      <AOI></AOI>
      <Feature1></Feature1>
      <Feature2></Feature2>
    </div>
  );
}

export default App;
