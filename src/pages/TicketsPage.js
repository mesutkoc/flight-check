import React from "react";
import { useDestination } from "context/DestinationContext";

function TicketsPage() {
  const { destination } = useDestination();
  console.log({ destination });
  return <div>These are tickets</div>;
}

export default TicketsPage;
