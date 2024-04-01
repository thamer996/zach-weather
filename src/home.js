import React from "react";
import "./App.css";
// Importez votre composant WindyMap depuis le bon chemin
import Data from "./Data";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Map</h1>
      </header>
      <Data />
      {/* Utilisez le composant WindyMap ici */}
    </div>
  );
}

export default Home;
