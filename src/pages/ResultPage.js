import React from "react";
import { useFlights } from "context/FlightContext";
import ErrorField from "components/ErrorField";
import SuccessField from "components/SuccessField";
import "./ResultPage.scss";

function ResultPage() {
  const { selectedFlight } = useFlights();
  return (
    <div className="resultPage">
      {selectedFlight?.status === "AVAILABLE" ? (
        <SuccessField></SuccessField>
      ) : (
        <ErrorField></ErrorField>
      )}
    </div>
  );
}

export default ResultPage;
