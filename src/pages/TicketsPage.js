import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useDestination } from "context/DestinationContext";
import { useFlights } from "context/FlightContext";
import { getFlights } from "FlightHelper";

function TicketsPage() {
  const { destination } = useDestination();
  const { flights } = useFlights();
  const { i } = useParams();
  const flightLocations = i.split("-");

  const flightsList = useMemo(() => {
    return getFlights({ flights, flightLocations });
  }, [flightLocations, flights]);

  return <div>These are tickets</div>;
}

export default TicketsPage;
