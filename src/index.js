import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teams from "./components/Teams";
import TeamInfo from "./components/TeamInfo";
import NotFound from "./components/NotFound";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<App />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:id" element={<TeamInfo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
