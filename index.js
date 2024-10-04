const express = require("express");
const phones = require("./phone.json");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello from my first ever server second call");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const phone = phones.find((p) => p.id === id) || {};
  res.send(phone);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
