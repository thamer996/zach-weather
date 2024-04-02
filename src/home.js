// Home.js
import React from "react";
import "./App.css";
import WindyMap from "./WindyMap";
import Data from "./Data" // Make sure the path is correct

function Home() {
  return (
    <div className="App">
      
      <WindyMap />
      <Data />
     
      {/* Now using the WindyMap component */}
    </div>
  );
}

export default Home;
