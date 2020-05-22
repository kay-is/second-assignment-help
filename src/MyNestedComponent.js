import React from "react";

// named component export
export function OtherComponent(props) {
  return <h3 style={{ color: "blue" }}>Other Component!</h3>;
}

// default component export
export default function MyNestedComponent(props) {
  // extracting all values that were passed down from the parent component
  const { someData, someOtherData, onCustomEvent, onOtherEvent } = props;

  // this handler is called by a button click
  // it checks if the parent passed a function down before trying to call it
  function handleClick() {
    if (typeof onCustomEvent === "function") onCustomEvent();
  }

  // this handler is called by an input change
  // it gets the current value of the input element
  // and passes it up via the onOtherEvent prop
  // it checks if the parent passed a function down before trying to call it
  function handleInput(event) {
    // event.target.value can be passed directly to onOtherEvent
    // this example just illustrates which parts of the event are what
    const inputElement = event.target;
    const text = inputElement.value;
    if (typeof onOtherEvent === "function") onOtherEvent(text);
  }

  // elements can have CSS className and/or style like in HTML
  // style is an object here
  // in the object you have to use camelCase instead of kebab-case
  // text-align becomes textAlign, etc.
  const customStyle = { color: "white" };

  // the className is defined in the styles.css and can be used here
  return (
    <div className="myCustomCssClass" style={customStyle}>
      {/* someData is the static object that doesn'T change from the parent */}
      {/* it has a name key and a isLecturer key */}
      <h2>{someData.name}</h2>
      <button onClick={handleClick}>MyButton</button>
      {/* the input element needs the updated value from the parent */}
      {/* in this case the someOtherData value is an object with an example key */}
      {/* the example key holds a text and the parent gets passed the new text via the handleInput function above */}
      <input value={someOtherData.example} onChange={handleInput} />
    </div>
  );
}
