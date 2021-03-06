import React, { Component } from "react";
import { BsCheckCircle } from "react-icons/bs";
import mobileapp from "./images/mobileapp2.png";
import { vijaycreations } from "./styles/Feature1.tsx";
import { welcome } from "./styles/Feature1.tsx";
import { welcomedesc } from "./styles/Feature1.tsx";
import { iconsStyle } from "./styles/Feature1.tsx";
import { mobiledesc } from "./styles/Feature1.tsx";

class Feature1 extends Component {
  render() {
    return (
      <div className="mx-5 my-5 justify-content-around">
        <div className="mx-5 row ">
          <div className="col">
            <img
              src={mobileapp}
              className="mx-5 my-3"
              alt="website"
              width="385"
              height="440"
            ></img>
          </div>
          <div style={welcome} className="mx-4 my-5">
            <span style={welcome}>
              Looking for <span style={vijaycreations}>Mobile App?</span>
            </span>
            <div style={welcomedesc}>
              We got resources to build both Native and CrossPlatform apps.
              <div>
                Our effective and rapid development team makes it possible!{" "}
              </div>
            </div>
            <div className="mx-5 mt-5 ">
              <BsCheckCircle style={iconsStyle}></BsCheckCircle>
              <span style={mobiledesc} className="mx-3">
                LifeTime Tech Support
              </span>
            </div>
            <div className="mx-5">
              <BsCheckCircle style={iconsStyle}></BsCheckCircle>
              <span style={mobiledesc} className="mx-3">
                Rapid Integration and Testing
              </span>
            </div>{" "}
            <div className="mx-5">
              <BsCheckCircle style={iconsStyle}></BsCheckCircle>
              <span style={mobiledesc} className="mx-3">
                Robust and light weight
              </span>
            </div>
          </div>
        </div>
        <hr className="my-5 mx-5"></hr>
      </div>
    );
  }
}

export default Feature1;
