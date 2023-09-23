const checkFlight = ({ flights, destination }) => {
  return flights?.filter(
    (flight) =>
      flight?.destinationAirport?.city?.name.toLowerCase() ===
        destination?.Nereye?.toLowerCase() &&
      flight?.originAirport?.city?.name.toLowerCase() ===
        destination?.Nereden?.toLowerCase()
  );
};

export { checkFlight };
