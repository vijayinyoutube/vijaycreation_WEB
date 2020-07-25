import React, { Component } from "react";
import customer from "./images/customer.png";
import { vijaycreations } from "./styles/Feature4.tsx";
import { welcomedesc } from "./styles/Feature4.tsx";

class Feature4 extends Component {
  render() {
    return (
      <div class="row-sm my-3">
        <div class="container">
          <div class="row">
            <div className="col-sm">
              <img
                src={customer}
                alt="customer"
                width="550"
                height="575"
                top="10"
              ></img>
            </div>

            <div className="col-sm my-5 mx-lg-5">
              <div class="col my-5">
                <div class="row-sm my-5" style={vijaycreations}>
                  vijaycreations
                </div>
                <div class="row-sm" style={welcomedesc}>
                  " I've never seen such a flexible and elegant design.
                </div>
                <div class="row-sm" style={welcomedesc}>
                  Can't wait to use it again in my next project! "
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feature4;
