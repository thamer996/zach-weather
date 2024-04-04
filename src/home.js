// Home.js
import React from "react";
import "./App.css";
import WindyMap from "./WindyMap";
import Data from "./Data" // Make sure the path is correct
import ResponsiveAppBar from "./navbar";

function Home() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <WindyMap />
      <Data />
     
      {/* Now using the WindyMap component */}
    </div>
  );
}

export default Home;
