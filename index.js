const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
  const firstInput = Number(req.body.firstNumber);
  const secondInput = Number(req.body.secondNumber);
  const result = firstInput + secondInput;
  res.send("Your answer is: " + result);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
