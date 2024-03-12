import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Index from "./pages/Index.js";
import Login from "./pages/Login.js";
import Registration from "./pages/Registration.js";
import { Outlet } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Outlet />
  </React.StrictMode>
);
