import express from "express";
const app = express();

const port = 3300;

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "Welcome to the home route." });
});

app.listen(3301, () => {
  console.log(`Server is running at http://localhost:3301`);
});
