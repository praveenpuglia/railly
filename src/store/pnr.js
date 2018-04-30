export default {
  state: {
    journey_class: {
      name: null,
      code: "3A"
    },
    doj: "11-07-2018",
    reservation_upto: {
      lat: 22.5882216,
      lng: 88.323139,
      name: "HOWRAH JN",
      code: "HWH"
    },
    pnr: "8303598191",
    passengers: [
      {
        booking_status: "CNF/B1/53/GN",
        current_status: "CNF/-/0/GN",
        no: 1
      },
      {
        booking_status: "CNF/B1/51/GN",
        current_status: "CNF/-/0/GN",
        no: 2
      },
      {
        booking_status: "CNF/B1/46/GN",
        current_status: "CNF/-/0/GN",
        no: 3
      },
      {
        booking_status: "CNF/B1/48/GN",
        current_status: "CNF/-/0/GN",
        no: 4
      }
    ],
    debit: 3,
    boarding_point: {
      lat: 21.166667,
      lng: 81.0,
      name: "RAJ NANDGAON",
      code: "RJN"
    },
    response_code: 200,
    to_station: {
      lat: 22.5882216,
      lng: 88.323139,
      name: "HOWRAH JN",
      code: "HWH"
    },
    chart_prepared: false,
    from_station: {
      lat: 21.166667,
      lng: 81.0,
      name: "RAJ NANDGAON",
      code: "RJN"
    },
    total_passengers: 4,
    train: {
      name: "HWH-CSMT",
      days: [
        {
          runs: "Y",
          code: "MON"
        },
        {
          runs: "Y",
          code: "TUE"
        },
        {
          runs: "Y",
          code: "WED"
        },
        {
          runs: "Y",
          code: "THU"
        },
        {
          runs: "Y",
          code: "FRI"
        },
        {
          runs: "Y",
          code: "SAT"
        },
        {
          runs: "Y",
          code: "SUN"
        }
      ],
      classes: [
        {
          name: "THIRD AC",
          available: "Y",
          code: "3A"
        },
        {
          name: "SLEEPER CLASS",
          available: "Y",
          code: "SL"
        },
        {
          name: "FIRST AC",
          available: "N",
          code: "1A"
        },
        {
          name: "SECOND AC",
          available: "Y",
          code: "2A"
        },
        {
          name: "3rd AC ECONOMY",
          available: "N",
          code: "3E"
        },
        {
          name: "SECOND SEATING",
          available: "N",
          code: "2S"
        },
        {
          name: "FIRST CLASS",
          available: "N",
          code: "FC"
        },
        {
          name: "AC CHAIR CAR",
          available: "N",
          code: "CC"
        }
      ],
      number: "12859"
    }
  }
};
