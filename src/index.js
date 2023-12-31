import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import { FlightProvider } from "context/FlightContext";
import { DestinationProvider } from "context/DestinationContext";
import { FilterProvider } from "context/FilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FlightProvider>
      <DestinationProvider>
        <FilterProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FilterProvider>
      </DestinationProvider>
    </FlightProvider>
  </React.StrictMode>
);
