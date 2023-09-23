import React from "react";
import { ReactComponent as Departure } from "assets/plane-departure-solid.svg";
import { ReactComponent as Arrival } from "assets/plane-arrival-solid.svg";
import { ORIGIN } from "constants";
import "./Components.scss";

function Input({ type, handleChange }) {
  return (
    <div className="inputField">
      {type.en === ORIGIN.en ? (
        <Departure className="icon"></Departure>
      ) : (
        <Arrival className="icon"></Arrival>
      )}
      <input
        className="input"
        type="text"
        id={type.en}
        name={type.en}
        placeholder={type.tr}
        onChange={(e) => handleChange(e.target.value, type.en)}
      ></input>
    </div>
  );
}

export default Input;
