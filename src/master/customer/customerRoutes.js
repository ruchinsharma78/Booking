const { Router } = require("express");
const customerRouter = Router();
const { getCustomerDetailsById, getCustomerDetails } = require("./customerController");

customerRouter.get("/:id", async (req, res) => {
  try {
    const customerId = parseInt(req.params.id);
    const { rows } = await getCustomerDetailsById({ customerId });
    const customerDetails = rows;
    res.json({ response: true, data: customerDetails });
  } catch (error) {
    console.log(error)
    res.json({ response: false });
  }
});

customerRouter.get("/", async (req, res) => {
  try {
    const { rows } = await getCustomerDetails({ });
    const customerDetails = rows;
    res.json({ response: true, data: customerDetails });
  } catch (error) {
    console.log(error)
    res.json({ response: false });
  }
});

module.exports = customerRouter;
