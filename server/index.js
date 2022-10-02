const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");

const CheckUserStore = require("./middleware/checkStore");
const connection = require("./config/connection");
const Validation = require("./middleware/validation");
const UserModel = require("./model/StoreModel");
require("dotenv").config();
app.use(express.json());
app.use(cors());

app.get("/", Validation, CheckUserStore, (req, res) => {
  const data = req.body;

  res.send(data);
});
app.get("/all", async (req, res) => {
  const all = await UserModel.find();
  res.send(all);
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("db is connected");
  } catch {
    console.log("db is not connected");
  }
  console.log("server is running on port:", process.env.PORT);
});


