import React, { Component } from "react";
import withCounter from "./withCounter";
class ClickCounter extends Component {
  render() {
    const { count, handleClick } = this.props;
    return (
      <div>
        <button onClick={handleClick}>Clicked {count} times</button>
      </div>
    );
  }
}

export default withCounter(ClickCounter);
