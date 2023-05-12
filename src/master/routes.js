const { Router } = require("express");
const masterRouter = Router();
const portRouter = require("./ports/routes");
const customerRouter = require("./customer/routes");

masterRouter.use("/customer", customerRouter);

masterRouter.use("/port",portRouter);

module.exports = masterRouter;
