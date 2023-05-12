const { Router } = require("express");
const customerRouter = Router();
const { getCustomerDetailsById } = require("./controller");
customerRouter.get("/:id", async (req, res) => {
  try {
    const customerId = parseInt(req.params.id);
    const { rows } = await getCustomerDetailsById({ customerId });
    const customerDetails = rows[0];
    res.json({ response: true, data: customerDetails });
  } catch (error) {
    res.json({ response: false });
  }
});

module.exports = customerRouter;
