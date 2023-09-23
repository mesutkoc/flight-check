import React from "react";
import { useNavigate } from "react-router-dom";

import "./Components.scss";

const SearchButton = () => {
  const navigate = useNavigate();

  const viewTickets = () => {
    navigate(`/tickets`);
  };

  return (
    <button className="searchButton" onClick={() => viewTickets("item")}>
      Uçuş Ara
    </button>
  );
};

export default SearchButton;
