import { createContext, useContext, useState } from "react";
import data from "./flights.json";

const FlightContext = createContext();

export const FlightProvider = ({ children }) => {
  const [flights, setFlights] = useState(data?.flights);
  const [selectedFlight, setSelectedFlight] = useState(data?.flights);

  const values = {
    flights,
    selectedFlight,
    setSelectedFlight,
    setFlights,
  };

  return (
    <FlightContext.Provider value={values}>{children}</FlightContext.Provider>
  );
};
export const useFlights = () => useContext(FlightContext);
