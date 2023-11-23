import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import Navbar2 from "./components/Navbar2";
import TextForm2 from "./components/TextForm2";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let [mode, setMode] = useState("light");
  let [alert, setAlert] = useState(null);

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    
  };

  let toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2a3444";
      showAlert("Dark Mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enabled", "success");
    }
  };

  //     // setInterval(() => {
  //     //   document.title = "TextUtils is amazing mode";
  //     // }, 1000);
  //     // setInterval(() => {
  //     //   document.title = "Install TextUtils now";
  //     // }, 2000);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <Router>
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <Routes>
        <Route exact path="/about" element={<About mode={mode} />}></Route>
        <Route
          exact
          path="/"
          element={
            <TextForm2
              heading="Try TextUtils - Word Counter, Character Counter"
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
