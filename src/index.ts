import express from "express";
import router from "./routes";

const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "Welcome to the home route." });
});

app.use("/api/v1", router);

app.listen(3301, () => {
  console.log(`Server is running at http://localhost:3301`);
});
