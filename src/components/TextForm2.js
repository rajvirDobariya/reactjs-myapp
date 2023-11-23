import React, { useState } from "react";

export default function TextForm2(props) {

  const [text, setText] = useState("Enter text here2");
  const disable=text.length===0;

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase!','success');
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase!','success');
  };

  const handleStartWithCapital = () => {
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
    navigator.clipboard.writeText(text);
    props.showAlert('Copy text!','success');
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert('Clear text!','success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  
  return (
    <>
      <div className="container my-3" style={{
              color: props.mode === "dark" ? "white" : "#2a3444"
            }}>
        <h1 className='mb-4'>{props.heading}</h1>
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
        <button disabled ={disable} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled ={disable} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button
          disabled ={disable} className="btn btn-primary mx-2 my-1"
          onClick={handleStartWithCapital}
        >
          Start With Capital
        </button>
        <button disabled ={disable} className="btn btn-primary mx-2 my-1" onClick={handleCopyText}>
          Copy Text
        </button>

        <button disabled ={disable} className="btn btn-primary mx-2 my-1" onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{
              color: props.mode === "dark" ? "white" : "#2a3444"
            }}>
        <h1>Total text summery</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes required for reading</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:'Nothing to preview!'}</p>
      </div>
    </>
  );
}
