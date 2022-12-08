const faker = require("faker");
const generateLineItems = require("./line-items");
const generateParcel = require("./parcel");
// const RETURN_STATUS = [
//   "Booking pending",
//   "Pending approval",
//   "Rejected",
//   "Approved",
//   "Shipping",
//   "Completed",
//   "Cancelled",
//   "Inactive",
//   "Archived"
// ];

const generateShipment = () => {
  const shipment = {
    id: Number.parseInt(faker.datatype.number({ max: 99999 }), 10),
    return_status: null,
    shipment_status: "inactive",
    shipment_id: "SHIP7101192",
    line_items: generateLineItems(),
    parcel: generateParcel(),
    return_comment: null,
    return_item_image: null,
    collection_point_id: null
  };
  return shipment;
};

(() => {
  const shipment = generateShipment();
  console.log("******START SHIPMENT********");
  console.log(shipment);
  console.log("******END SHIPMENT********");
})();

module.exports = generateShipment;
