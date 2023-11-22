import React, { useState } from "react";

export default function TextForm2(props) {

  const handleUpClick = () => {
    console.log("Uppercase was clicked!" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase!','success');
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked!" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase!','success');
  };

  const handleStartWithCapital = () => {
    console.log("StartWithCapital was clicked!" + text);

    const lines = text.split("\n");

    let newLines = lines.map((line) => {
      return line
        .split(" ")
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(" ");
    });
    const newText = newLines.join("\n");
    setText(newText);
    props.showAlert('Converted to StartWithCapital!','success');
  };

  const handleCopyText = () => {
    console.log("Copy text was clicked!" + text);
    navigator.clipboard.writeText(text);
    props.showAlert('Copy text!','success');
  };

  const clearText = () => {
    console.log("Clear Text was clicked!" + text);
    let newText = "";
    setText(newText);
    props.showAlert('Clear text!','success');
  };

  const handleOnChange = (event) => {
    console.log("HandleOnChange was clicked!");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here2");
  return (
    <>
      <div className="container" style={{
              color: props.mode === "dark" ? "white" : "#2a3444"
            }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
            style={{
              backgroundColor: props.mode === "dark" ? "#2a3444" : "white", color:props.mode === "dark" ? "white" : "#2a3444"
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleStartWithCapital}
        >
          Start With Capital
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyText}>
          Copy Text
        </button>

        <button className="btn btn-primary mx-2" onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{
              color: props.mode === "dark" ? "white" : "#2a3444"
            }}>
        <h1>Total text summery</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes required for reading</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:'Enter something for preview above'}</p>
      </div>
    </>
  );
}
