const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // const uri = "mongodb+srv://mansi:12345@cluster0.q1eeu10.mongodb.net/Test?retryWrites=true&w=majorixty" || "mongodb://localhost/bags-ecommerce";
    const uri = "mongodb://localhost:27017/bags-ecommerce";
    await mongoose
      .connect(uri, {
        useCreateIndex: true
      })
      .catch((error) => console.log(error));
    const connection = mongoose.connection;
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = connectDB;
