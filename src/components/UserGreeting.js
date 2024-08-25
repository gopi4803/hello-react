import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isloggedIn: true,
    };
  }
  render() {
    // let message;
    // if (this.state.isloggedIn) {
    //    message=<div>Welcome User</div>;
    // } else {
    //    message=<div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>
    // return(
    // (this.state.isloggedIn)?
    // <div>Welcome User</div>:
    // <div>welcome Guest</div>
    // )
    return this.state.isloggedIn && <div>Welcome User</div>;
  }
}

export default UserGreeting;
