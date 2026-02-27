import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { CartProvider } from "./context/CartContext";
import { Router } from "./context/RouterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  </React.StrictMode>
);