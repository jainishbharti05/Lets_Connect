const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
let cors = require("cors");
const { CONNECTION_URI } = require("./config");
const morgan = require("morgan");
const fs = require("fs");
const db = require("./db.json");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(CONNECTION_URI, { useNewUrlParser: true });

const { Person } = require("./models/person");

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.post("/api/addperson", (req, res, next) => {
  const person = new Person({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    account_details: {
      holder_name: req.body.account_details.holder_name,
      bank_type: req.body.account_details.bank_type,
      account_number: req.body.account_details.account_number,
      IFSC: req.body.account_details.ifsc,
      account_type: req.body.account_details.account_type,
    },
  });
  if (req.body.storage === "database") {
    person.save((err, doc) => {
      if (err) res.status(400).json({ error: err.message });
      else res.status(200).json({ status: "Added successfully!", doc: doc });
    });
  } else {
    db.data.push(person);
    fs.writeFile("./db.json", JSON.stringify(db), (err) => {
      if (err) res.status(400).json({ error: "Error writing file :", err });
      else
        res
          .status(200)
          .json({ status: "Successfully written to the local file" });
    });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server started successfully on http://localhost:${port}`);
});

app.use(function (req, res, next) {
  const error = new Error("Something Broke");
  error.status = 404;
  next(error);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});
