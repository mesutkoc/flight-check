const flights = [
  {
    originAirport: {
      name: "Istanbul Airport",
      code: "IST",
      city: {
        code: "IST",
        name: "Istanbul",
      },
      country: {
        code: "TR",
        name: "Turkey",
      },
    },
    destinationAirport: {
      name: "Antalya Airport",
      code: "AYT",
      city: {
        code: "AYT",
        name: "Antalya",
      },
      country: {
        code: "TR",
        name: "Turkey",
      },
    },
    arrivalDateTimeDisplay: "01:15",
    departureDateTimeDisplay: "02:45",
    flightDuration: "1s 30d",
    fareCategories: {
      BUSINESS: {
        subcategories: [
          {
            brandCode: "ecoFly",
            price: {
              amount: 400.0,
              currency: "TRY",
            },
            order: 1,
            status: "AVAILABLE",
            rights: ["20 kg Bagaj", "Ucresiz Yemek Secimi"],
          },
          {
            brandCode: "extraFly",
            price: {
              amount: 500.0,
              currency: "TRY",
            },
            order: 2,
            status: "AVAILABLE",
            rights: [
              "30 kg Bagaj",
              "Standart Koltuk Secimi",
              "Ucresiz Yemek Secimi",
            ],
          },
          {
            brandCode: "primeFly",
            price: {
              amount: 800.99,
              currency: "TRY",
            },
            order: 3,
            status: "AVAILABLE",
            rights: [
              "50 kg Bagaj",
              "Standart Koltuk Secimi",
              "Ucretsiz Degisiklik",
              "Ucresiz Yemek Secimi",
            ],
          },
        ],
      },
      ECONOMY: {
        subcategories: [
          {
            brandCode: "ecoFly",
            price: {
              amount: 242.0,
              currency: "TRY",
            },
            order: 1,
            status: "AVAILABLE",
            rights: ["15 kg Bagaj"],
          },
          {
            brandCode: "extraFly",
            price: {
              amount: 290.0,
              currency: "TRY",
            },
            order: 2,
            status: "AVAILABLE",
            rights: ["20 kg Bagaj", "Standart Koltuk Secimi"],
          },
          {
            brandCode: "primeFly",
            price: {
              amount: 351.99,
              currency: "TRY",
            },
            order: 3,
            status: "AVAILABLE",
            rights: [
              "25 kg Bagaj",
              "Standart Koltuk Secimi",
              "Ucretsiz Degisiklik",
            ],
          },
        ],
      },
    },
  },
  {
    originAirport: {
      name: "Istanbul Airport",
      code: "IST",
      city: {
        code: "IST",
        name: "Istanbul",
      },
      country: {
        code: "TR",
        name: "Turkey",
      },
    },
    destinationAirport: {
      name: "Antalya Airport",
      code: "AYT",
      city: {
        code: "AYT",
        name: "Antalya",
      },
      country: {
        code: "TR",
        name: "Turkey",
      },
    },
    arrivalDateTimeDisplay: "09:50",
    departureDateTimeDisplay: "11:20",
    flightDuration: "1s 30d",
    fareCategories: {
      BUSINESS: {
        subcategories: [
          {
            brandCode: "ecoFly",
            price: {
              amount: 676.0,
              currency: "TRY",
            },
            order: 1,
            status: "ERROR",
            rights: ["20 kg Bagaj", "Ucresiz Yemek Secimi"],
          },
          {
            brandCode: "extraFly",
            price: {
              amount: 800.0,
              currency: "TRY",
            },
            order: 2,
            status: "AVAILABLE",
            rights: [
              "30 kg Bagaj",
              "Standart Koltuk Secimi",
              "Ucresiz Yemek Secimi",
            ],
          },
          {
            brandCode: "primeFly",
            price: {
              amount: 1200.99,
              currency: "TRY",
            },
            order: 3,
            status: "AVAILABLE",
            rights: [
              "50 kg Bagaj",
              "Standart Koltuk Secimi",
              "Ucretsiz Degisiklik",
              "Ucresiz Yemek Secimi",
            ],
          },
        ],
      },
      ECONOMY: {
        subcategories: [
          {
            brandCode: "ecoFly",
            price: {
              amount: 250.0,
              currency: "TRY",
            },
            order: 1,
            status: "AVAILABLE",
            rights: ["15 kg Bagaj"],
          },
          {
            brandCode: "extraFly",
            price: {
              amount: 380.0,
              currency: "TRY",
            },
            order: 2,
            status: "AVAILABLE",
            rights: ["20 kg Bagaj", "Standart Koltuk Secimi"],
          },
          {
            brandCode: "primeFly",
            price: {
              amount: 470.99,
              currency: "TRY",
            },
            order: 3,
            status: "ERROR",
            rights: [
              "25 kg Bagaj",
              "Standart Koltuk Secimi",
              "Ucretsiz Degisiklik",
            ],
          },
        ],
      },
    },
  },
];

const flightLocations = ["Istanbul", "Ankara"];

const destination = { destination: "antalya", origin: "istanbul" };
export { flights, destination, flightLocations };
