const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(cookieParser());

// Routes
const allRoutes = require("./routes/index");
app.use("/api", allRoutes);

mongoose.set("strictQuery", false);
mongoose
  .connect(
    // atlas Url
  )
  .then(() => {
    app.listen(8080, () => {
      console.log("started");
    });
  })
  .catch((err) => {
    console.log(err);
  });
