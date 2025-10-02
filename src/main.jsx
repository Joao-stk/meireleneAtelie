import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SpeedInsights } from "@vercel/speed-insights/react"; // ✅ export nomeado

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <SpeedInsights /> {/* ✅ funciona assim */}
  </React.StrictMode>
);
