const Express = require("express");
// const User = require("./controllers/user");

var routes = (application) => {
  const api = Express.Router();
  const http = Express.Router();

  application.use((req, res, next) => {
    console.log("Routes activated!");
    console.log("Authenticating Developer");
    return next();
  });

  /**
   * default path setting up
   */
  application.use("/api", api);
  api.use("/v1", http);

  http.get("/app/status", function (req, res) {
    res.status(200).send({
      message: "success",
    });
  });

//   http.post("/signup", User.signup);
//   http.post("/login", User.login);

  /**
   * Following route will be invoked when user request path will not be found
   * route-not-found error must come after all routes declaration
   */
  http.use((req, res, next) => {
    res.status(404).send("Route not found!");
  });
};

module.exports = routes;
