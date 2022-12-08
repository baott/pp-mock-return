const faker = require("faker");

const generateLineItems = (numberOfLineItems) => {
  const lineItems = [];
  Array.from(new Array(numberOfLineItems)).forEach(() => {
    const lineItem = {
      product_name: "",
      product_description: "",
      product_image_url: "",
      product_url: "",
      quantity: Number.parseInt(faker.datatype.number({ max: 999 }), 10),
      currency_code: "USD",
      total_price: Number.parseFloat(faker.commerce.price)
    };
    lineItems.push(lineItem);
  });
  return lineItems;
};

module.exports = generateLineItems;
