import React from "react";
import { useNavigate } from "react-router-dom";
import { useFlights } from "context/FlightContext";
import { SEARCH_FLIGHT, PATH } from "constants";
import { checkFlight } from "FlightHelper";
import "./Components.scss";

const Search = ({ destination, openModal }) => {
  const { flights } = useFlights();
  const navigate = useNavigate();

  const viewTickets = () => {
    const hasFlights = checkFlight({ flights, destination });

    hasFlights
      ? navigate(
          `/${PATH.tickets}/${destination?.origin}-${destination?.destination}`
        )
      : openModal();
  };

  return (
    <button className="searchButton" onClick={() => viewTickets()}>
      {SEARCH_FLIGHT}
    </button>
  );
};

export default Search;
