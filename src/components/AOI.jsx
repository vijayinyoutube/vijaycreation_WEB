import React, { Component } from "react";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { IoIosApps } from "react-icons/io";
import { FaReact } from "react-icons/fa";
const data1 = {
  // color: "#314c79",
  fontWeight: "normal",

  fontFamily: "Nirmala UI",
  fontSize: 21,
};
const datades = {
    color: "#314c79",   
  fontWeight: "normal",
  fontFamily: "Nirmala UI",

  fontSize: 17,
};

const iconsStyle = {
  color: "#1c3def",
  fontSize: 45,
};

class AOI extends Component {
  render() {
    return (
      <div className="mx-5 my-5 justify-content-around">
        <div className="row mx-5">
          <div className="col mx-4">
            <div>
              <AiOutlineDeploymentUnit style={iconsStyle} className="mx-5 my-3"></AiOutlineDeploymentUnit>
            </div>
            <span style={data1} className="mx-5">
              Develop from scratch
            </span>

            <span className="row ml-5  mt-2" style={datades}>
              vijaycreations helps out to build more responsive websites from
              scratch that offers better user experience.
            </span>
          </div>
          <div className="col ml-4">
            <div>
              <IoIosApps style={iconsStyle} className="mx-5 my-3"></IoIosApps>
            </div>
            <span style={data1} className="mx-5">
              Elegant Features
            </span>

            <span className="row ml-5  mt-2" style={datades}>
              State of the art technology to render elegant features and better
              performance.
            </span>
          </div>
          <div className="col mx-4">
          <div>
              <FaReact style={iconsStyle} className="mx-5 my-3"></FaReact>
            </div>
            <span style={data1} className="mx-5">
              Easy Development
            </span>

            <span className="row ml-5  mt-2" style={datades}>
              Create and render web apps with light weight and with minimal
              effort using React.
            </span>
          </div>
        </div>
        <hr className="my-5 mx-5" ></hr>
      </div>
    );
  }
}

export default AOI;
