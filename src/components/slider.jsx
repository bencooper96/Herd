import React, { Component } from "react";

class Slider extends Component {
  state = {};
  render() {
    return (
      <div>
        <input type="range" min="0" max="5" className="slider" />
      </div>
    );
  }
}

export default Slider;
