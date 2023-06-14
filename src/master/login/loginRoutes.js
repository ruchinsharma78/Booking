const { Router } = require("express");
const loginRouter = Router();
const { getLoginDetailsById } = require("./loginController");

loginRouter.get("/:user_id", async (req, res) => {
  try {
    const userId = req.params.user_id.toString();
    
    const { rows } = await getLoginDetailsById({ userId });
    //const { rows } = await getLoginDetailsById({ "ruchin78" });
    const loginDetails = rows;
    res.json({ response: true, data: loginDetails });
    
  } catch (error) {
    console.log(error)
    res.json({ response: false });
  }
});

module.exports = loginRouter;
