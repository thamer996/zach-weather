import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Vérifier les informations de connexion
    if (username === "Zach" && password === "weather-admin") {
      // Informations correctes, afficher message de succès
      toast.success("Connexion réussie !");
      // Rediriger vers la page d'accueil
      window.location.href = "/home"; // Redirection
    } else {
      // Informations incorrectes, afficher message d'erreur
      toast.error("Pseudo ou mot de passe incorrect !");
    }
  };

  return (
    <div className="login-container">
      <video autoPlay loop muted className="video-background">
        <source
          src={`https://videocdn.cdnpk.net/joy/content/video/free/video0485/large_preview/_import_61a73ceb0bb2d0.93532791.mp4?filename=1118402_4k_weather_star_3840x2160.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="card">
        <div className="card-header">
          <h2>Weather App</h2>
        </div>
        <div className="card-body">
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
