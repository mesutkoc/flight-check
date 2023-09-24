import React, { useMemo } from "react";
import { useFilter } from "context/FilterContext";
import { convertFareObjectToArray } from "FlightHelper";
import PriceField from "./PriceField";
import "./TicketComponents.scss";

const TicketFareCategory = ({ category, onClick, index: count }) => {
  const { promotion } = useFilter();
  const fareList = useMemo(() => {
    return convertFareObjectToArray({ category });
  }, [category]);

  return (
    <div className="categories">
      {fareList?.map((cat, index) => (
        <div key={`${index}-${cat?.category}`}>
          <div
            className="category"
            key={`${cat?.category}`}
            onClick={() => onClick(`${count}-${cat?.category}`, cat)}
          >
            <div className={`title${cat?.category}`}>{cat?.category}</div>
            <div className="categoryContent">
              <div className="price">
                <div className="perPassenger">Yolcu Başına</div>
                <PriceField
                  currency={cat?.subcategories?.[0]?.price?.currency}
                  amount={
                    promotion && cat?.category === "ECONOMY"
                      ? cat?.subcategories?.[0]?.price?.amount / 2
                      : cat?.subcategories?.[0]?.price?.amount
                  }
                ></PriceField>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketFareCategory;
