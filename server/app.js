import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./routes/user";

require("dotenv").config();

const { PORT } = process.env;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/user", userRoutes);

app.use("/", (req, res, next) => {
  res.json({ "message": "Not found" });
});

mongoose
  .connect(`mongodb://localhost:27017/shop`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(PORT);
    console.log("App is online on port " + PORT);
  })
  .catch(err => {
    console.log("Shutting down...");
    process.exit();
  });
