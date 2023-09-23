import React from "react";
import { ReactComponent as Departure } from "assets/plane-departure-solid.svg";
import { ReactComponent as Arrival } from "assets/plane-arrival-solid.svg";
import "./Components.scss";

function Input({ prop }) {
  console.log(prop);
  return (
    <div className="inputField">
      {prop === "Nereden" ? (
        <Departure className="icon"></Departure>
      ) : (
        <Arrival className="icon"></Arrival>
      )}
      <input
        className="input"
        type="text"
        id={prop}
        name={prop}
        placeholder={prop}
      ></input>
    </div>
  );
}

export default Input;
