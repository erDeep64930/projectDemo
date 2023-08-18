const express = require("express");
const app = express();
require("../project-1/config/conn");
const Student=require("../project-1/models/students")
const port = process.env.PORT || 4000;

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to home page</h1>`);
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
