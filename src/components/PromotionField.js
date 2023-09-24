import React from "react";
import { useFilter } from "context/FilterContext";
import "./PromotionField.scss";

const PromotionField = () => {
  const { promotion, setPromotion } = useFilter();

  return (
    <div>
      <div className="promotion">
        Promosyon Kodu
        <label className="switch">
          <input
            type="checkbox"
            checked={promotion && true}
            onChange={() => setPromotion((prev) => !prev)}
          />
          <span className="slider round"></span>
        </label>
      </div>
      {promotion && (
        <div className="promotionInfo">
          <p>
            Promosyon Kodu seçeneği ile tüm Economy kabini Eco Fly paketlerini
            %50 indirimle satın alabilirsiniz!
          </p>
          <p>
            Promosyon Kodu seçeneği aktifken Eco Fly paketi haricinde seçim
            yapılamamaktadır.
          </p>
        </div>
      )}
    </div>
  );
};

export default PromotionField;
