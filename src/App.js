import React from "react";
import Navbar from "./components/Navbar";
import Linechart from "./components/Linechart";
import Inputdata from "./components/Inputdata";

const App = () => {
  const find = () => {
    alert("hi");
  };
  return (
    <div>
      <Navbar />
      <Inputdata />
      <Linechart />
    </div>
  );
};

export default App;
