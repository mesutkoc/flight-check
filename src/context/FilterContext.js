import { FILTER_TYPE } from "constants";
import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filterType, setFilterType] = useState(FILTER_TYPE.default);

  const values = {
    filterType,
    setFilterType,
  };

  return (
    <FilterContext.Provider value={values}>{children}</FilterContext.Provider>
  );
};
export const useFilter = () => useContext(FilterContext);
