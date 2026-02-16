const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const mongoDb = require("./db");
mongoDb();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json())
app.use('/api',require("./Routes/Createuser"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
