import React, { Component } from "react";

const VijayCreations = {
  color: "#1c3def",
  fontWeight: "bold",
  fontFamily: "Nirmala UI",
  fontSize: 30,
};

const navBarContent = {
  color: "#314c79",
  fontWeight: "normal",
  fontFamily: "arial",
  fontSize: 17.5,
  marginleft: 25,
};

const signUp = {
  color: "white",
  fontWeight: "normal",
  fontFamily: "arial",
  fontSize: 18,
};

const button = {
  background: "#1c3def",
  height: 45,
  // width: 95,
  borderRadius: 7,
};
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-default mx-5 my-3 justify-content-around">
          <a
            style={VijayCreations}
            class="navbar-brand"
            href="https://www.youtube.com/channel/UCBC_Z7jla1GSITcqLKAtPxQ"
          >
            VijayCreations
          </a>
          <span class="d-flex justify-content-around">
            <a style={navBarContent} className="navbar-brand mr-4" href="#">
              Approach
            </a>

            <a style={navBarContent} class="navbar-brand mx-4 " href="#">
              Services
            </a>

            <a style={navBarContent} class="navbar-brand mx-4" href="#">
              Carrer
            </a>

            <a style={navBarContent} class="navbar-brand mx-4" href="#">
              Contact
            </a>
          </span>
          <button style={button} className="btn btn-primary">
            <span style={signUp}>Sign Up</span>
          </button>
        </nav>
      </div>
    );
  }
}

export default Navbar;
