const jsonServer = require("json-server");
const faker = require("faker");
const server = jsonServer.create();
const router = jsonServer.router("src/database/db.json");
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
// server.use((req, res, next) => {
//   // Continue to JSON Server router
//   next();
// });

router.render = (req, res) => {
  // mock cancel API
  if (
    new RegExp("/list-parcels/").test(req._parsedUrl.pathname) &&
    req.method === "PATCH" &&
    Object.keys(req.body).length === 0
  ) {
    const { id, return_status } = res.locals.data;
    return res.jsonp({
      ...res.locals.data,
      return_status: id !== "401" ? "cancelled" : return_status
    });
  }
  // mock book api
  if (
    new RegExp("/list-parcels/").test(req._parsedUrl.pathname) &&
    req.method === "PATCH" &&
    req.body
  ) {
    const { collectionPoint } = req.body;
    const { id } = res.locals.data;
    return res.jsonp({
      ...res.locals.data,
      return:
        id !== "401"
          ? {
              ...res.locals.data.return,
              return_status: "shipping"
            }
          : {
              ...res.locals.data.return,
              return_status: "booking_pending"
            },
      booking:
        id !== "401"
          ? {
              id: Number.parseInt(faker.datatype.number({ max: 99999 }), 10),
              collection_point: collectionPoint
            }
          : null
    });
  }
  return res.jsonp(res.locals.data);
};

// Add this before server.use(router)
server.use(
  jsonServer.rewriter({
    "/book/:id": "/api/list-parcels/:id",
    "/cancel/:id": "/api/list-parcels/:id"
  })
);

// Use default router
server.use("/api", router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
