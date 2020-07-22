import React, { Component } from "react";
import website from "./website.png";
import { FaArrowRight } from "react-icons/fa";

const vijaycreations = {
  color: "#1c3def",
  fontWeight: "normal",
  fontFamily: "arial",
  fontSize: 40,
};

const welcome = {
  //color: "#1c3def",
  fontWeight: "normal",
  fontFamily: "Nirmala UI",
  fontSize: 40,
  top: 35,
};

const welcomedesc = {
  color: "#314c79",
  fontWeight: "normal",
  fontFamily: "Nirmala UI",
  fontSize: 20,
  
};

const viewAll = {
  color: "white",
  fontWeight: "normal",
  fontFamily: "arial",
  fontSize: 18,
};

const viewAllButton = {
  background: "#1c3def",
  height: 55,
  width: 160,
  borderRadius: 7,
};

const collaborate = {
  color: "#1c3def",
  fontWeight: "normal",
  fontFamily: "arial",
  fontSize: 18,
};

const collaborateButton = {
  background: "#d8e7fe",
  height: 55,
  width: 160,
  borderRadius: 7,
  borderColor: "#d8e7fe",
};

const image = {
  // height: Dimensions.get("window").width / 2,
};

class Welcome extends Component {
  render() {
    return (
      <div className="mx-5 my-5 justify-content-around container">
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
          <div style={image} className="col">
            <img src={website} alt="website" width="650" height="440"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
