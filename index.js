const express = require("express");
const app = express();

let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/add", (req, res) => {
  let a = parseInt(req.query.a);
  let b = parseInt(req.query.b);
  res.send(`${a} + ${b} = ${a + b}`);
});

app.get("/sub", (req, res) => {
  let a = parseInt(req.query.a);
  let b = parseInt(req.query.b);
  res.send(`${a} - ${b} = ${a - b}`);
});

app.get("/json", (req, res) => {
  res.send({
    name: "John",
    age: 30,
    city: "New York",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
