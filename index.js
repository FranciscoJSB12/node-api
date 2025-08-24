require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    message: "Server running",
  });
});

app.post("/create", (req, res) => {
  const message = req.body.message;

  return res.json({
    message,
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
