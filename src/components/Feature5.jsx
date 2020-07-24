import React, { Component } from "react";
import { AiOutlineLineChart } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import mobileapp from "./images/focus.png";
import divider from "./images/divider.png";
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

const iconsStyle = {
  color: "#1c3def",
  fontSize: 35,
};

const mobiledesc = {
  //  color: "#1c3def",
  color: "#314c79",
  fontWeight: "normal",
  fontFamily: "arial",
  fontSize: 18,
};

const data1 = {
  // color: "#314c79",
  fontWeight: "normal",

  fontFamily: "Nirmala UI",
  fontSize: 23,
};

const dividerStyle = {
  color: "lightgrey",
  fontSize: 55,

  fontWeight: "normal",
};

class Feature5 extends Component {
  render() {
    return (
      <div className="ml-5 my-5 justify-content-around">
        <div className="mx-5 row ">
          <div style={welcome} className="mx-4 my-5">
            <span style={welcome}>
              Stay focused and
              <div style={vijaycreations}> Let us handle the design.</div>
            </span>
            <div className="my-4"></div>
            <div style={welcomedesc}>
              We got experts around globe to make your vision possible.
              <div>Let us do that for you.</div>
            </div>

            <div class="row my-5">
              <div style={{ fontSize: 27 }} class="col mr-3">
                100%
                <div style={welcomedesc}>Satisfaction</div>
              </div>
              <img
                src={divider}
                className=""
                alt="website"
                width="2"
                height="80"
                style={{ color: "blue", backgroundColor: "blue" }}
              ></img>
              <div style={{ fontSize: 27 }} class="col mx-3">
                24/7<div style={welcomedesc}>Support</div>
              </div>
              <img
                src={divider}
                className=""
                alt="website"
                width="2"
                height="80"
                style={{ color: "blue", backgroundColor: "blue" }}
              ></img>
              <div style={{ fontSize: 27 }} class="col ml-3">
                500K+
                <div style={welcomedesc}>Sales</div>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={mobileapp}
              className=""
              alt="website"
              width="625"
              height="575"
            ></img>
          </div>
        </div>
        <hr className="my-5 mx-5"></hr>
      </div>
    );
  }
}

export default Feature5;
