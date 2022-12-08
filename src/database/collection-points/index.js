const faker = require("faker");
const NUMBER_OF_COLLECTION_POINTS = 100;

const generateCollectionPoints = (numberOfCollectionPoints) => {
  const collectionPoints = [];
  Array.from(new Array(numberOfCollectionPoints)).forEach(() => {
    const collectionPoint = {
      id: Number.parseInt(faker.datatype.number({ max: 99999 }), 10),
      lat: Number.parseFloat(faker.address.latitude()),
      lng: Number.parseFloat(faker.address.longitude()),
      postal_code: faker.address.zipCode("#####"),
      address_name: "",
      address_full: faker.address.streetAddress(true),
      address_line1: "",
      address_line2: "",
      address_line3: "",
      address_postal_code: faker.address.zipCode("#####"),
      carrier: {},
      address_phone: faker.phone.phoneNumber(),
      operating_hours_calc: [
        {
          operating_day: "Monday",
          first_open_hours: "08:30-12:30",
          sec_open_hours: "16:00 - 20:00"
        },
        {
          operating_day: "Tuesday",
          first_open_hours: "08:30 - 12:30",
          sec_open_hours: "16:00 - 20:00"
        },
        {
          operating_day: "Wednesday",
          first_open_hours: "08:30 - 12:30",
          sec_open_hours: "16:00 - 20:00"
        },
        {
          operating_day: "Thursday",
          first_open_hours: "08:30 - 12:30",
          sec_open_hours: "16:00 - 20:00"
        },
        {
          operating_day: "Friday",
          first_open_hours: "08:30 - 12:30",
          sec_open_hours: "16:00 - 20:00"
        },
        {
          operating_day: "Saturday",
          first_open_hours: "08:30 - 12:30",
          sec_open_hours: "16:00 - 20:00"
        },
        {
          operating_day: "Sunday",
          first_open_hours: "08:30 - 12:30",
          sec_open_hours: "16:00 - 20:00"
        }
      ]
    };
    collectionPoints.push(collectionPoint);
  });
  return collectionPoints;
};

(() => {
  const collectionPoints = generateCollectionPoints(
    NUMBER_OF_COLLECTION_POINTS
  );
  console.log("****COLLECTION POINTS****");
  console.log(collectionPoints);
  console.log("****END COLLECTION POINTS****");
})();
