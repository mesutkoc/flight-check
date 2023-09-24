import { FILTER_TYPE } from "constants";

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

const getFlights = ({ flights, flightLocations, filterType }) => {
  const flightList = flights?.filter(
    (flight) =>
      flight?.originAirport?.city?.name?.toLowerCase() ===
        flightLocations?.[0] &&
      flight?.destinationAirport?.city?.name?.toLowerCase() ===
        flightLocations?.[1]
  );

  return filteredFlightList(flightList, filterType);
};

const filteredFlightList = (flightList, filterType) => {
  if (filterType === FILTER_TYPE.price) {
    return flightList.sort((a, b) => {
      return (
        a.fareCategories.ECONOMY.subcategories[0].price.amount -
        b.fareCategories.ECONOMY.subcategories[0].price.amount
      );
    });
  }
  if (filterType === FILTER_TYPE.departure) {
    return flightList.sort((a, b) => {
      return a.departureDateTimeDisplay - b.departureDateTimeDisplay;
    });
  }
  return flightList;
};

const convertFareObjectToArray = ({ category }) => {
  return Object.keys(category)
    .map((key) => {
      return {
        category: key,
        subcategories: category?.[key]?.subcategories,
      };
    })
    .reverse();
};

export { checkFlight, getFlights, convertFareObjectToArray };
