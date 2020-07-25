import React, { Component } from "react";
import { VijayCreations } from "./styles/NavBarStyle.tsx";
import { navBarContent } from "./styles/NavBarStyle.tsx";
import { signUp } from "./styles/NavBarStyle.tsx";
import { button } from "./styles/NavBarStyle.tsx";

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
