import { checkFlight } from "./FlightHelper";
import { flights, destination } from "dummyTestData";

describe("Helper functions", () => {
  it("returns true if has flights", () => {
    const hasFlights = checkFlight({ flights, destination });
    expect(hasFlights).toEqual(true);
  });

  it("returns false if has no flights", () => {
    const hasFlights = checkFlight({
      flights,
      destination: { ...destination, origin: "ankara" },
    });
    expect(hasFlights).toEqual(false);
  });
});
