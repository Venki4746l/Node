const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema(
  {
    name: "string",
    email: "string",
    password:"string",
  },
  { collection: "userInfo" }
);

mongoose.model("userInfo",userDetailsSchema)
