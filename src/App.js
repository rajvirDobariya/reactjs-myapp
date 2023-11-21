import "./App.css";
import Navbar from "./components/Navbar";
import TextForm2 from "./components/TextForm2";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">

        <TextForm2 heading="Enter text to analyze"/>
      </div>
    </>
  );
}

export default App;
