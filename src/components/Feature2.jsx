import React, { Component } from "react";
import { AiOutlineLineChart } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import mobileapp from "./images/website2.png";
import { vijaycreations } from "./styles/Feature2.tsx";
import { welcome } from "./styles/Feature2.tsx";
import { welcomedesc } from "./styles/Feature2.tsx";
import { iconsStyle } from "./styles/Feature2.tsx";
import { mobiledesc } from "./styles/Feature2.tsx";
import { data1 } from "./styles/Feature2.tsx";

class Feature2 extends Component {
  render() {
    return (
      <div className="mx-5 my-5 justify-content-around">
        <div className="mx-5 row ">
          <div style={welcome} className="mx-4 my-5">
            <span style={welcome}>
              We got Expericence in
              <span style={vijaycreations}> Web app!</span>
            </span>
            <div style={welcomedesc}>
              Building responsive web application in minimal time. Using
              <div>Cutting Edge Technology for creating nexgen apps.</div>
            </div>
            <div className="mx-5 mt-5 row">
              <AiOutlineLineChart
                className="mt-2"
                style={iconsStyle}
              ></AiOutlineLineChart>
              <span style={data1} className="mx-4">
                Real time web interface
                <div style={mobiledesc}>
                  Deploying models that outstands the
                  <div>expected performance.</div>
                </div>
              </span>
            </div>
            <div className="mx-5 mt-5 row">
              <BsCodeSlash className="mt-2" style={iconsStyle}></BsCodeSlash>
              <span style={data1} className="mx-4">
                Modern Solution
                <div style={mobiledesc}>
                  Develop reliable and robust technology
                  <div>that maintain standards.</div>
                </div>
              </span>
            </div>
          </div>
          <div className="col ml-5">
            <img
              src={mobileapp}
              className="ml-5 my-3"
              alt="website"
              width="450"
              height="525"
            ></img>
          </div>
        </div>
        <hr className="my-5 mx-5"></hr>
      </div>
    );
  }
}

export default Feature2;
