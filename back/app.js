const express = require("express");

const app = express();
const PORT = 5001;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log("Server is running...");
});
