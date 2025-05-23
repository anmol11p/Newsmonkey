import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <News />
      </div>
    </>
  );
};

export default App;
