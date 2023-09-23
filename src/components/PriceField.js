import React from "react";

const PriceField = ({ currency, amount }) => {
  return (
    <div>
      <span className="currency">{currency}</span>
      <span className="count">{amount}</span>
    </div>
  );
};

export default PriceField;
