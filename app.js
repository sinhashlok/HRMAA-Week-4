const express = require("express");
const mongoose = require("mongoose");
const body = require("body-parser");
const Address = require("./model/models");

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(body.urlencoded({ extended: true }));

// Connect to DB
mongoose
  .connect("mongodb://localhost:27017/week4", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });

// Adding a User to AddressBook
app.post("/", (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const phone = req.body.phone;

  const newAddress = new Address({
    fname: fname,
    lname: lname,
    email: email,
    phone: phone,
  });

  newAddress.save();
  res.send();
});

// Get user by ID
app.get("/get/:id", (req, res) => {
  Address.findById(req.params.id, (err, user) => {
    res.send(user);
  });
});

// Get All users
app.get("/getAll", (req, res) => {
  Address.find().exec(function (err, user) {
    res.send(user);
  });
});

// BT
app.get("/", (req, res) => {
  const name = req.query.fname;

  Address.find({fname: name}).exec(function (err, user) {
    res.send(user);
  });
});

app.listen(3000, () => {
  console.log(`Server started on: ${3000}`);
});
