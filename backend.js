var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

var app = express();
app.use(cors());
app.use(bodyParser.json());

var port = 4000;

var lists = [];

app.post("/save", function (req, res) {
  console.log(req.body);
  lists = req.body.lists;
  return res.json({ success: true });
});

app.get("/load", function (req, res) {
  return res.json({ lists: lists });
});

app.listen(port, function () {
  console.log("Kanban backend running on http://localhost:" + port + "!");
});
