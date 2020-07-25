import React, { Component } from "react";
import website from "./images/website.png";
import { FaArrowRight } from "react-icons/fa";
import { vijaycreations } from "./styles/WelcomeStyle.tsx";
import { welcome } from "./styles/WelcomeStyle.tsx";
import { welcomedesc } from "./styles/WelcomeStyle.tsx";
import { viewAll } from "./styles/WelcomeStyle.tsx";
import { viewAllButton } from "./styles/WelcomeStyle.tsx";
import { collaborate } from "./styles/WelcomeStyle.tsx";
import { collaborateButton } from "./styles/WelcomeStyle.tsx";

class Welcome extends Component {
  render() {
    return (
      <div className="mx-5 my-5 justify-content-around">
        <div className="mx-5 row ">
          <div style={welcome} className="mx-4 my-5">
            <span style={welcome}>
              Welcome to <span style={vijaycreations}>VijayCreations.,</span>
            </span>
            <div style={welcomedesc}>
              Start building beautiful Websites from scratch.
              <div> Develop anything you need!</div>
            </div>

            <button style={viewAllButton} className="btn btn-primary  my-5 ">
              <span style={viewAll}>
                View all<FaArrowRight className="ml-3"></FaArrowRight>
              </span>
            </button>
            <button
              style={collaborateButton}
              className="btn btn-primary  my-5 ml-3"
            >
              <span style={collaborate}>Collaborate</span>
            </button>
          </div>
          <div className="col">
            <img src={website} alt="website" width="650" height="440"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
