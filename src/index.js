import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import { FlightProvider } from "context/FlightContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FlightProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FlightProvider>
  </React.StrictMode>
);
