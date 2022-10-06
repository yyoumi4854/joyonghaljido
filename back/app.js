const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 5001;

app.use((req, res, next) => {
  if (process.nextTick.NODE_ENV === "production") {
    morgan("combined")(req, res, next);
  } else {
    morgan("dev")(req, res, next);
  }
});

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello Team04");
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
