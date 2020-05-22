import React from "react";
import "./styles.css";

// how to import a value from a file with a default export
import MyNestedComponent from "./MyNestedComponent";

// how to import a value from a file with a named export
import { OtherComponent } from "./MyNestedComponent";

export default function App() {
  // simple state with an object that has one text value
  const [exampleState, setExampleState] = React.useState({
    example: "initial state"
  });

  // static value, won't change
  const accountDetails = {
    name: "Kay",
    isLecturer: true
  };

  // event handler, doesn't get an attribte will alert with the state objects text
  function handleCustomEvent() {
    alert("Input Is: " + JSON.stringify(exampleState));
  }

  // event handler, gets a text value from MyNestedComponent
  // here I called it customEventData to illustrate that this attribute can have any name
  function handleOtherEvent(customEventData) {
    // updates the exampleState with a new object that includes the updated text
    // set functions always have to get new values
    // so we can't do exampleState.example = customEventData;
    setExampleState({ example: customEventData });
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {/* All attrivbutes become keys in the props object of MyNestedComponent */}
      <MyNestedComponent
        onCustomEvent={handleCustomEvent}
        onOtherEvent={handleOtherEvent}
        someData={accountDetails}
        someOtherData={exampleState}
      />
      <OtherComponent />
    </div>
  );
}
