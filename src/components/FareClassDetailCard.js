import React from "react";
import PriceField from "./PriceField";

const FareClassDetailCard = ({ item, index, cat }) => {
  return (
    <div className="detailCard">
      <div className={`detailHeader${cat?.category}`}>
        <div>{item?.brandCode}</div>
        <div className="price">
          <PriceField
            currency={item?.price?.currency}
            amount={item?.price?.amount}
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
        <button>ads</button>
      </div>
    </div>
  );
};

export default FareClassDetailCard;
