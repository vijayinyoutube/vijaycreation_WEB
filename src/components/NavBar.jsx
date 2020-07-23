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

const button1 = {
  background: "#1c3def",
  height: 45,

  // width: 95,
  borderRadius: 7,
};
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-default mr-4 ml-3 my-3 justify-content-around">
          <a
            style={VijayCreations}
            className="navbar-brand mr-5"
            href="https://www.youtube.com/channel/UCBC_Z7jla1GSITcqLKAtPxQ"
          >
            VijayCreations
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="d-flex justify-content-around ">
            <span
              class="collapse navbar-collapse justify-content-around "
              id="collapsibleNavbar"
            >
              <a style={navBarContent} className="navbar-brand mr-4 " href="#">
                Approach
              </a>

              <a style={navBarContent} className="navbar-brand mx-4 " href="#">
                Services
              </a>

              <a style={navBarContent} className="navbar-brand mx-4" href="#">
                Carrer
              </a>

              <a style={navBarContent} className="navbar-brand mx-4" href="#">
                Contact
              </a>
            </span>
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
