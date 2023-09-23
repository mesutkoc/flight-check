import React from "react";
import "./TicketComponents.scss";

const TicketTimeInfo = ({ flight }) => {
  return (
    <div className="timeInfo">
      <div className="departureTimeInfo">
        <span>{flight?.arrivalDateTimeDisplay}</span>
        <span>{flight?.originAirport?.city?.code}</span>
        <span>{flight?.originAirport?.city?.name}</span>
      </div>
      <div className="line" />
      <div className="arriveInfo">
        <span>{flight?.departureDateTimeDisplay}</span>
        <span>{flight?.destinationAirport?.city?.code}</span>
        <span>{flight?.destinationAirport?.city?.name}</span>
      </div>
      <div className="duration">
        <label>Uçuş Süresi</label>
        {flight?.flightDuration}
      </div>
    </div>
  );
};

export default TicketTimeInfo;
