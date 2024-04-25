const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/food-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/foods", router); 

mongoose
  .connect(
    "mongodb+srv://karanacharya2003:KaranAcharya2003@cluster0.hvku4wp.mongodb.net/bookStore?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5001);
  })
  .catch((err) => console.log(err));
