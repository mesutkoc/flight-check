import React from "react";
import { useFlights } from "context/FlightContext";
import { useFilter } from "context/FilterContext";
import PriceField from "components/PriceField";
import PassengerRights from "./PassengerRights";

function SuccessField() {
  const { selectedFlight } = useFlights();
  const { promotion } = useFilter();

  return (
    <div>
      <div className="success">
        <div className="circle">
          <div className="checkMark"></div>
        </div>
        <h3>Kabin seçimimiz tamamlandı.</h3>
      </div>
      <hr className="line"></hr>
      <div>
        <h3>Yolcu Hakları</h3>
        <PassengerRights item={selectedFlight}></PassengerRights>
      </div>
      <h4>Toplam Tutar </h4>
      <PriceField
        amount={
          promotion
            ? selectedFlight?.price?.amount / 2
            : selectedFlight?.price?.amount
        }
        currency={selectedFlight?.price?.currency}
      ></PriceField>
    </div>
  );
}

export default SuccessField;
