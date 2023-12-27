import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/_global-imports.scss";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
