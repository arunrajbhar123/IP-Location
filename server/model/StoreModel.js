const mongoose = require("mongoose");

const SchemaUser = new mongoose.Schema({
  ip: { type: String },
  type: { type: String },
  continent: { type: String },
  country: { type: String },
  region: { type: String },
  city: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
  img: { type: String },
  isp: { type: String },
  org: { type: String },
});

const UserModel = mongoose.model("user", SchemaUser);

module.exports=UserModel
