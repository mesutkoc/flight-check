import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorField() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="error">
        <div className="crosssign"></div>
        <h3>Kabin seçiminiz tamamlamadı.</h3>
      </div>
      <button onClick={() => navigate("/")}>Başa Dön</button>
    </div>
  );
}

export default ErrorField;
