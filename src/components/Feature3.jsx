import React, { Component } from "react";
import { IoIosPeople } from "react-icons/io";
import { vijaycreations } from "./styles/Feature3.tsx";
import { iconsStyle } from "./styles/Feature3.tsx";
import { welcome } from "./styles/Feature3.tsx";
import { welcomedesc } from "./styles/Feature3.tsx";

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
