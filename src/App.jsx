import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Loading from "./components/Loading/Loading";
import Path from "./routes/Path";

const App = () => {
 
  return (
    <div className=" font-Poppins font-[500]">{<Path />}</div>
  );
};

export default App;
