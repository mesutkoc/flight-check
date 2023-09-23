import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useDestination } from "context/DestinationContext";
import { useFlights } from "context/FlightContext";
import { getFlights } from "FlightHelper";
import TicketTimeInfo from "components/TicketTimeInfo";
import TicketFareCategory from "components/TicketFareCategory";
import CollapsibleFareCategories from "components/CollapsibleFareCategories";
import "./TicketsPage.scss";

function TicketsPage() {
  const { destination } = useDestination();
  const { flights } = useFlights();
  const { i } = useParams();
  const [openItem, setOpenItem] = useState(null);
  const [cat, setCat] = useState({});
  const flightLocations = i.split("-");

  const flightsList = useMemo(() => {
    return getFlights({ flights, flightLocations });
  }, [flightLocations, flights]);

  const handleItemClick = (value, cat) => {
    setCat(cat);

    if (openItem === value) {
      setOpenItem(null);
    } else {
      setOpenItem(value);
    }
  };

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
            className="ticket"
            key={`${index}-${flight?.originAirport?.code}`}
          >
            <div className="ticketInfo">
              <TicketTimeInfo flight={flight}></TicketTimeInfo>
              <TicketFareCategory
                category={flight?.fareCategories}
                onClick={handleItemClick}
                index={index}
              ></TicketFareCategory>
            </div>

            <CollapsibleFareCategories
              openItem={openItem}
              index={index}
              cat={cat}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TicketsPage;
