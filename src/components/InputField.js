import React from "react";
import { ReactComponent as Departure } from "assets/plane-departure-solid.svg";
import { ReactComponent as Arrival } from "assets/plane-arrival-solid.svg";
import { ORIGIN } from "constants";
import "./Components.scss";

function Input({ type, handleChange }) {
  return (
    <div className="inputField">
      {type === ORIGIN ? (
        <Departure className="icon"></Departure>
      ) : (
        <Arrival className="icon"></Arrival>
      )}
      <input
        className="input"
        type="text"
        id={type}
        name={type}
        placeholder={type}
        onChange={(e) => handleChange(e.target.value, type)}
      ></input>
    </div>
  );
}

export default Input;
