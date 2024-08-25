import React, { Component } from "react";
import withCounter from "./withCounter";
class HoverCounter extends Component {
  render() {
    const { count, handleClick } = this.props;
    return (
      <div>
        <h1 onMouseOver={handleClick}>On mouse hover of {count}</h1>
      </div>
    );
  }
}

export default withCounter(HoverCounter);
