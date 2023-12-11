const mongoose = require("mongoose");
const url = "mongodb+srv://chanchal6264cr:x4FHcI6UlVj5G8A5@cluster0.r4p3czz.mongodb.net/";
// x4FHcI6UlVj5G8A5

const dbConnect = () => {
  const con = mongoose
    .connect(url)
    .then((doc) => {
      console.log("Db Connection successfully.");
    })
    .catch((err) => {
      console.log("Error in db connection", err);
    });
};

module.exports = dbConnect;
