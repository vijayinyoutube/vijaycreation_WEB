import React, { Component } from "react";

import { IoIosPeople } from "react-icons/io";

const vijaycreations = {
  //background: "#eef6fc",
  color: "#1c3def",
  fontWeight: "normal",
  fontFamily: "arial",
  fontSize: 40,
};

const iconsStyle = {
  //background: "#eef6fc",
  color: "#1c3def",
  fontSize: 70,
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

const backgroundStyle = {
  background: "#eef6fc",
};

class Feature3 extends Component {
  render() {
    return (
      <div className="col">
        <div
          class="row-sm justify-content-center mx-auto"
          style={{ width: window.innerWidth / 1.95 }}
        >
          <view style={{ width: window.innerWidth / 1.95 }}>
            <span style={welcome}>
              <IoIosPeople style={iconsStyle} className="mb-2"></IoIosPeople>
              <span style={vijaycreations}> Clients</span> are our biggest
              strength
            </span>
            <div style={welcomedesc} className="mx-3">
              The relationship between us is truely immeasurable. The binding
              they had with us over years have been showcased here...
            </div>
          </view>
        </div>
      </div>
    );
  }
}

export default Feature3;
