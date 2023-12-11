const dbConnect = require("./config/dbConfig");
dbConnect();
const PORT = 9090;
const express = require("express");
const app = express();
app.use(express.json());
const cors = require('cors')
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userRouter = require("./routes/userRoutes");

app.use("/user", userRouter.router);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Err in Port Listing", err);
  } else {
    console.log(`Port is running on ${PORT}`);
  }
});
