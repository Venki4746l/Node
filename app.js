const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4000;
app.use(express.json());

const cors=require("cors")
app.use(cors());

const mongourl =
  "mongodb+srv://venki4746l:venki4746l@cluster0.umjjraf.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongourl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("conncetion Sucess");
  })
  .catch((e) => console.log(e));

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.post("/post", async (req, res) => {
  console.log(req.body);
  const { data } = req.body;
});

require("./useDetails");
const User = mongoose.model("userInfo");

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await User.create({
      name,
      email,
      password,
    });
    res.send({ status: "Ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});
