import React from "react";
import { ReactComponent as Calender } from "assets/calendar-days-solid.svg";
import "./Components.scss";

const CalenderField = () => {
  return (
    <div className="calenderField">
      <Calender className="icon" />
      <span>Tarih</span>
    </div>
  );
};

export default CalenderField;
