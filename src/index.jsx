import "./sass/theme.scss";
import React from "react";
import Home from "./pages/home";
import ReactDOM from "react-dom/client";
import Characters from "./pages/characters";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Rota inicial */}
        <Route path="/characters" element={<Characters />} /> {/* Segunda rota */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
