import React from "react";
import { useNavigate } from "react-router-dom";
import { SEARCH_FLIGHT, PATH } from "constants";

import "./Components.scss";

const SearchButton = () => {
  const navigate = useNavigate();

  const viewTickets = () => {
    navigate(`/${PATH.tickets}`);
  };

  return (
    <button className="searchButton" onClick={() => viewTickets()}>
      {SEARCH_FLIGHT}
    </button>
  );
};

export default SearchButton;
