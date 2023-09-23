const checkFlight = ({ flights, destination }) => {
  const flightsList = flights?.filter(
    (flight) =>
      flight?.destinationAirport?.city?.name.toLowerCase() ===
        destination?.destination?.toLowerCase() &&
      flight?.originAirport?.city?.name.toLowerCase() ===
        destination?.origin?.toLowerCase()
  );

  return flightsList?.length > 0;
};

const getFlights = ({ flights, flightLocations }) => {
  return flights?.filter(
    (flight) =>
      flight?.originAirport?.city?.name?.toLowerCase() ===
        flightLocations?.[0] &&
      flight?.destinationAirport?.city?.name?.toLowerCase() ===
        flightLocations?.[1]
  );
};

export { checkFlight, getFlights };
