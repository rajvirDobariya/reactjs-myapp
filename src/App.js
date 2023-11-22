import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm2 from "./components/TextForm2";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  let [mode, setMode] = useState("light");
  let [alert, setAlert] = useState(null);

  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2a3444";
      showAlert("Dark Mode is enabled", "success");
      document.title = "TextUtils - Darkmode";

      // setInterval(() => {
      //   document.title = "TextUtils is amazing mode";
      // }, 1000);

      // setInterval(() => {
      //   document.title = "Install TextUtils now";
      // }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enabled", "success");
      document.title = "TextUtils - Lightmode";
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <Routes>
        <Route exact path="/about" element={<About />}></Route>
        <Route
          exact path="/"
          element={
            <TextForm2
              heading="Enter text to analyze"
              mode={mode}
              showAlert={showAlert}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
