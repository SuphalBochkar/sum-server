const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(cors());

app.get("/me", (req, res) => {
  res.json({ message: "Hello from Service 1" });
});

const port = process.env.PORT_APP1 || 3001;
app.listen(port, () => console.log(`Service 1 running on PORT: ${port}`));
