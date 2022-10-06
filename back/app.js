const express = require("express");

const app = express();
const PORT = 5001;

app.get("/", (req, res) => {
  res.send("Hello Team04");
});

app.listen(PORT, () => {
  console.log("Server is running...");
});
