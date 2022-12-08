const generateShipment = require("./shipment");

const SHIPMENT_TYPE = "forward"; // forward | both
const NUMBER_OF_TOTAL_SHIPMENTS = 10;

const generateForwardShipments = (numberOfShipments) => {
  const shipments = [];
  Array.from(new Array(numberOfShipments)).forEach(() => {
    const shipment = {
      ...generateShipment()
    };
    shipments.push(shipment);
  });
  return shipments;
};

const generateReturnShipments = (numberOfShipments) => {
  const shipments = [];
  Array.from(new Array(numberOfShipments)).forEach(() => {
    const shipment = {
      ...generateShipment(),
      shipment_type: "return"
    };
    shipments.push(shipment);
  });
  return shipments;
};

const classifyShipmentTypes = {
  both: () => {
    const numberOfReturn = Math.floor(
      Math.random() * NUMBER_OF_TOTAL_SHIPMENTS
    );
    const numberOfForward = NUMBER_OF_TOTAL_SHIPMENTS - numberOfReturn;
    return {
      numberOfForward: numberOfForward,
      numberOfReturn: numberOfReturn
    };
  },
  return: () => {
    return { numberOfForward: 0, numberOfReturn: NUMBER_OF_TOTAL_SHIPMENTS };
  },
  forward: () => {
    return { numberOfForward: NUMBER_OF_TOTAL_SHIPMENTS, numberOfReturn: 0 };
  }
};

const generateShipments = (shipmentType) => {
  const { numberOfForward, numberOfReturn } = classifyShipmentTypes[
    shipmentType
  ]();
  const forwardShipments = generateForwardShipments(numberOfForward);
  const returnShipments = generateReturnShipments(numberOfReturn);
  return [...returnShipments, ...forwardShipments];
};

(() => {
  const shipments = generateShipments(SHIPMENT_TYPE);
  console.log("****SHIPMENTS****");
  console.log(JSON.stringify(shipments));
  console.log("****END SHIPMENTS****");
})();
