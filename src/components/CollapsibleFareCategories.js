import React from "react";
import FareClassDetailCard from "./FareClassDetailCard";
import "./CollapsibleFareCategories.scss";

const CollapsibleFareCategories = ({ openItem, index, cat }) => {
  return (
    <div>
      <div key={`${index}-${openItem}-${cat?.category}`}>
        {openItem === `${index}-${cat?.category}` && (
          <div className="categoryDetail">
            {cat?.subcategories?.map((item, index) => (
              <FareClassDetailCard
                item={item}
                index={index}
                cat={cat}
                key={`${index}-${cat?.category}-${item?.brandCode}`}
              ></FareClassDetailCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollapsibleFareCategories;
