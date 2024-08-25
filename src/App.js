// import logo from './logo.svg';
// import './App.css';

// import ParentComp from './components/PureComp';
// function App() {

//   return (
//     <div className="App">

//       <ParentComp />
//     </div>
//   );
// }

// export default App;
import React, { Component } from "react";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import PortalDemo from "./components/PortalDemo";
import ErrorBoundary from "./components/ErrorBoundary";
import Hero from "./components/Hero";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import RenderProps from "./components/RenderProps";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";
import Greet from "./components/Greet";
import FunctionClick from "./components/FunctionClick";
import ParentComponent from "./components/ParentComponent";
class App extends Component {
  render() {
    return (
      <div>
        {/* <FocusInput /> */}
        {/* <PortalDemo /> */}
        {/* <ErrorBoundary /> */}
        {/* <ErrorBoundary>
        <Hero heroName="Batman" />
        <Hero heroName="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName="joker" />
        </ErrorBoundary> */}
        {/* <ClickCounter />
        <HoverCounter /> */}
        {/* <RenderProps
          render={(count, incrementCount) => (
            <ClickCounterTwo
              count={count}
              incrementCount={incrementCount}
            ></ClickCounterTwo>
          )}
        />
        <RenderProps
          render={(count, incrementCount) => (
            <HoverCounterTwo
              count={count}
              incrementCount={incrementCount}
            ></HoverCounterTwo>
          )}
        /> */}
        {/* <UserProvider value="gopi">
          <ComponentC />
        </UserProvider> */}
        {/* <Greet name="sasuke" devilFruitName="rinnegan"/>
        <Greet name="Monkey D Gopi" devilFruitName="gum gum no mi"/>
        <Greet name="kushina" devilFruitName="kawai"/>
        <FunctionClick /> */}
        <ParentComponent />
      </div>
    );
  }
}

export default App;
