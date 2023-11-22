import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm2 from "./components/TextForm2";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor='#0c254a'
    } else {
      setMode("light");
      document.body.style.backgroundColor='white'
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm2 heading="Enter text to analyze" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
