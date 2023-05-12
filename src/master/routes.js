const { Router } = require("express");
const masterRouter = Router();
const customerRouter = require("./customer/routes");
masterRouter.use("/customer", customerRouter);

module.exports = masterRouter;
