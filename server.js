
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Mahmoud Bakir - 127859197");
});

app.listen(process.env.PORT || 5000)
