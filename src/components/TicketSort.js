import React from "react";
import { useFilter } from "context/FilterContext";
import { FILTER_TYPE } from "constants";

const TicketSort = () => {
  const { filterType, setFilterType } = useFilter();

  return (
    <div className="headerFilter">
      <span>Sıralama Kriterleri</span>
      <span
        className={`${filterType === FILTER_TYPE.price && FILTER_TYPE.price}`}
        onClick={() => setFilterType(FILTER_TYPE.price)}
      >
        Ekonomi Ücreti
      </span>
      <span
        className={`${
          filterType === FILTER_TYPE.departure && FILTER_TYPE.departure
        }`}
        onClick={() => setFilterType(FILTER_TYPE.departure)}
      >
        Kalkış Saati
      </span>
    </div>
  );
};

export default TicketSort;
