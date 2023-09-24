import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useFlights } from "context/FlightContext";
import { getFlights } from "FlightHelper";
import TicketTimeInfo from "components/TicketTimeInfo";
import TicketFareCategory from "components/TicketFareCategory";
import CollapsibleFareCategories from "components/CollapsibleFareCategories";
import TicketSort from "components/TicketSort";
import { useFilter } from "context/FilterContext";
import "./TicketsPage.scss";

function TicketsPage() {
  const { flights } = useFlights();
  const { filterType } = useFilter();
  const { i } = useParams();
  const [openItem, setOpenItem] = useState(null);
  const [cat, setCat] = useState({});
  const flightLocations = i.split("-");

  const flightsList = useMemo(() => {
    return getFlights({ flights, flightLocations, filterType });
  }, [flightLocations, flights, filterType]);

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
      <TicketSort></TicketSort>
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
