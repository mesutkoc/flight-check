import React, { useMemo } from "react";
import { convertFareObjectToArray } from "FlightHelper";
import "./TicketComponents.scss";

const TicketFareCategory = ({ category }) => {
  const fareList = useMemo(() => {
    return convertFareObjectToArray({ category });
  }, [category]);
  console.log(fareList);
  return (
    <div className="categories">
      {fareList?.map((cat) => (
        <div className="category" key={`${cat?.category}`}>
          <div className={`title${cat?.category}`}>{cat?.category}</div>
          <div className="categoryContent">
            <div className="price">
              <div className="perPassenger">Yolcu Başına</div>
              <span className="currency">
                {cat?.subcategories?.[0]?.price?.currency}
              </span>
              <span className="count">
                {cat?.subcategories?.[0]?.price?.amount}
              </span>
            </div>
            <div>V</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketFareCategory;
