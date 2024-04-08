import React from "react";
import "./App.css";
// Importez votre composant WindyMap depuis le bon chemin
import Data from "./Data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Historical from "./Historical";
import Login from "./Login";
import ResponsiveAppBar from "./navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<Historical />} />
        <Route path="/" element={<Login />} />
        {/* A //<Route path="/table" element={<Hi />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
