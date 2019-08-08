const express = require("express");
const app = express();
const countries = require("./countries.json");

app.use(require("cors")());

app.get("/countries", (req, res, next) => {
  res.json(countries);
});

app.listen(3001, () => {
  console.log(`Listening on http://localhost:3001`);
});
