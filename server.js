require('dotenv').config()

const express = require('express');
const app = express();
const port = 8080;
const path = require("path");

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
