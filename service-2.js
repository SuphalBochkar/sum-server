const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(cors());

app.get("/me", (req, res) => {
  res.json({ message: "This is Service Two" });
});

const port = process.env.PORT_APP2 || 3002;
app.listen(port, () => console.log(`Service 2 running on PORT: ${port}`));
