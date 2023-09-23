import { createContext, useContext, useState } from "react";

const DestinationContext = createContext();

export const DestinationProvider = ({ children }) => {
  const [destination, setDestination] = useState({});

  const values = {
    destination,
    setDestination,
  };

  return (
    <DestinationContext.Provider value={values}>
      {children}
    </DestinationContext.Provider>
  );
};
export const useDestination = () => useContext(DestinationContext);
