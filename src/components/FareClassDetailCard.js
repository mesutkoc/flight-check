import React, { useMemo } from "react";
import { useFilter } from "context/FilterContext";
import PriceField from "./PriceField";

const FareClassDetailCard = ({ item, cat }) => {
  const { promotion } = useFilter();

  const disabledButton = useMemo(() => {
    return (
      (promotion && item?.brandCode !== "ecoFly") ||
      (promotion && cat?.category === "BUSINESS")
    );
  }, [promotion, item?.brandCode, cat]);

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
        <div className="list">
          {item.rights?.map((right, index) => (
            <p key={index}>{right}</p>
          ))}
        </div>
      </div>
      <div className="addButton">
        <button
          disabled={disabledButton && `disabled`}
          onClick={() => console.log("asd")}
        >
          Uçuşu Seç
        </button>
      </div>
    </div>
  );
};

export default FareClassDetailCard;
