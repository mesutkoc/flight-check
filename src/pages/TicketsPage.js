import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useDestination } from "context/DestinationContext";
import { useFlights } from "context/FlightContext";
import { getFlights } from "FlightHelper";
import TicketTimeInfo from "components/TicketTimeInfo";
import TicketFareCategory from "components/TicketFareCategory";
import "./TicketsPage.scss";

function TicketsPage() {
  const { destination } = useDestination();
  const { flights } = useFlights();
  const { i } = useParams();
  const flightLocations = i.split("-");

  const flightsList = useMemo(() => {
    return getFlights({ flights, flightLocations });
  }, [flightLocations, flights]);

  console.log({ flightsList });
  return (
    <div className="ticketsPage">
      <div className="headerFilter">
        Sıralama Kriterleri
        <button>Ekonomi Ücreti</button>
        <button>Kalkış Saati</button>
      </div>
      <div className="tickets">
        {flightsList?.map((flight, index) => (
          <div
            className="ticketInfo"
            key={`${index}-${flight?.originAirport?.code}`}
          >
            <TicketTimeInfo flight={flight}></TicketTimeInfo>
            <TicketFareCategory
              category={flight?.fareCategories}
            ></TicketFareCategory>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TicketsPage;
