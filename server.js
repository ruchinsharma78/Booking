const express = require("express");
const cors = require("cors");
const { masterRoutes } = require("./src/router");
require("dotenv").config();

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", async (req, res) => {
  res.json({ res: true });
});
app.use("/master", masterRoutes);
app.listen(process.env.PORT, () => {
  console.log("Running");
});
