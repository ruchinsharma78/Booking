const express = require ("expres");
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(cors())

app.use(express.json());

