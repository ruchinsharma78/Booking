const { Router } = require("express");
const masterRouter = Router();
const portRouter = require("./ports/portsRoutes");
const customerRouter = require("./customer/customerRoutes");
const loginRouter = require("./login/loginRoutes")

masterRouter.use("/customer", customerRouter);

masterRouter.use("/login", loginRouter);

masterRouter.use("/port",portRouter);

module.exports = masterRouter;
