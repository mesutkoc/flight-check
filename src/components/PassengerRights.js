import React from "react";

function PassengerRights({ item }) {
  return (
    <div>
      {item.rights?.map((right, index) => (
        <p key={index}>{right}</p>
      ))}
    </div>
  );
}

export default PassengerRights;
