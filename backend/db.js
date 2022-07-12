const mongoose = require("mongoose");

const url =
  "mongodb+srv://Kanika:i04h3gt7@cluster0.pzsid.mongodb.net/bvp-quora-mern?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};

