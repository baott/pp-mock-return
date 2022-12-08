const faker = require("faker");
const PARCEL_STATUS = ["active", "pending", "delivery"];
// BOOKING_STATUS: PENDING

const generateEvents = (numberOfEvents) => {
  const events = [];
  Array.from(new Array(numberOfEvents)).forEach(() => {
    const event = {
      id: new Date().getTime(),
      event_type: "Handed Over to Delivery Partner",
      event_time: new Date().toISOString(),
      event_location: "Ho Chi Minh City, Ho Chi Minh City, Vietnam",
      event_type_master_data: {
        id: Number.parseInt(faker.datatype.number({ max: 999 }), 10),
        event_phase: {
          id: Number.parseInt(faker.datatype.number({ max: 99 }), 10),
          event_stage: {
            id: Number.parseInt(faker.datatype.number({ max: 99 }), 10),
            name: "Processing",
            key: "processing"
          },
          name: "Transit",
          key: "E"
        },
        name: "(R) Handed Over to Delivery Partner",
        key: "E24",
        display_name: null,
        analytics: "regular",
        delay_exception_source: null,
        is_consumer_visible: true,
        is_shipping_event: true,
        is_final_event: false,
        is_cross_border: false,
        is_cod: false,
        is_fixed_address: false,
        owner_type: "parcel"
      }
    };
    events.push(event);
  });
  return events;
};

const generateParcel = () => {
  const events = generateEvents(5);
  const parcel = {
    id: Number.parseInt(faker.datatype.number({ max: 99999 }), 10),
    parcel_id: "",
    status: PARCEL_STATUS[Math.floor(Math.random() * 3)],
    updated_date: new Date().toISOString(),
    carrier: {
      id: 0,
      carrier_id: "dhleco",
      carrier_logo: "//assets.parcelperform.com/logo/dhleco.png",
      carrier_url: "www.globalmail.dhl.com"
    },
    last_event: events[0],
    events: events
  };
  return parcel;
};

module.exports = generateParcel;
