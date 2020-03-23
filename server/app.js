import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import userRoutes from "./routes/user";

const app = express();
app.use(bodyParser.json());
app.use("/user", userRoutes);

mongoose
  .connect(`mongodb://localhost:27017/shop`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(3001);
    console.log("App is online");
  })
  .catch(err => {
    console.log("Shutting down...");
    process.exit();
  });
