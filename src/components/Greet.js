// import React from "react";
// const Greet = (props) => {
  
//   return (
//     <div className="dummyClass">
//       <h1>
//         Hello {props.name} aka {props.hero}
//       </h1>
//       {props.children}
//     </div>
//   );
//   //   return React.createElement(
//   //     "div",
//   //     { id: "hello", className: "dummyClass" },
//   //     React.createElement("h1", null, "Hello World")
//   //   );
// };
// export default Greet;
import React from "react";
const Greet=(props)=>{
  console.log(props)
  return <h1>Hello {props.name} aka {props.devilFruitName}</h1>
}
export default Greet;