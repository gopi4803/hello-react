import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>click</button>
    </div>
  );
}

export default FunctionClick;
