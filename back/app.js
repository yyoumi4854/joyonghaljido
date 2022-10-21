const dotenv = require("dotenv");
dotenv.config();
require("./src/db/index.js");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { PORT } = require("./src/constants");
const guRouter = require("./src/routers/guRouter");
const dongRouter = require("./src/routers/dongRouter");
const pinRouter = require("./src/routers/pinRouter");
const errorMiddleware = require("./src/middlewares/errorMiddleware");
const reviewRouter = require("./src/routers/reviewRouter");
const locationRouter = require("./src/routers/locationRouter.js");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/gus", guRouter);
app.use("/dongs", dongRouter);
app.use("/pins", pinRouter);
app.use("/location", locationRouter);
app.use("/reviews", reviewRouter);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
