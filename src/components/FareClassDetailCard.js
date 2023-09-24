import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useFilter } from "context/FilterContext";
import PriceField from "./PriceField";
import { useFlights } from "context/FlightContext";
import PassengerRights from "./PassengerRights";

const FareClassDetailCard = ({ item, cat }) => {
  const { promotion } = useFilter();
  const { setSelectedFlight } = useFlights();
  const navigate = useNavigate();

  const disabledButton = useMemo(() => {
    return (
      (promotion && item?.brandCode !== "ecoFly") ||
      (promotion && cat?.category === "BUSINESS")
    );
  }, [promotion, item?.brandCode, cat]);

  const onFlightSelect = () => {
    setSelectedFlight(item);
    navigate(`/result`);
  };

  return (
    <div className="detailCard">
      <div className={`detailHeader${cat?.category}`}>
        <div>{item?.brandCode}</div>
        <div className="price">
          <PriceField
            currency={item?.price?.currency}
            amount={
              promotion &&
              item?.brandCode === "ecoFly" &&
              cat?.category === "ECONOMY"
                ? item?.price?.amount / 2
                : item?.price?.amount
            }
          ></PriceField>
        </div>
      </div>
      <div className="passegerRights">
        <PassengerRights item={item}></PassengerRights>
      </div>
      <div className="addButton">
        <button
          disabled={disabledButton && `disabled`}
          onClick={() => onFlightSelect(item)}
        >
          Uçuşu Seç
        </button>
      </div>
    </div>
  );
};

export default FareClassDetailCard;
