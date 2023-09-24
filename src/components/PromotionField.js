import React from "react";
import "./PromotionField.scss";
import { useFilter } from "context/FilterContext";

const PromotionField = () => {
  const { promotion, setPromotion } = useFilter();
  return (
    <div>
      <div className="promotion">
        Promosyon Kodu
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setPromotion((prev) => !prev)}
          />
          <span className="slider round"></span>
        </label>
      </div>
      {promotion && (
        <div className="promotionInfo">
          Promosyon kodu aktifken Eco Fly paketi haricinde seçim
          yapılamamaktadır.
        </div>
      )}
    </div>
  );
};

export default PromotionField;
