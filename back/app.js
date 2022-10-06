const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();
require("./db/index.js");

const app = express();
const PORT = process.env.PORT || 5001;

app.use((req, res, next) => {
  if (process.nextTick.NODE_ENV === "production") {
    morgan("combined")(req, res, next);
  } else {
    morgan("dev")(req, res, next);
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello Team04");
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
