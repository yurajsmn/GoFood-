const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://yurajsmn:L5L9hmzBpRP6kAQW@yuvraj.srcnsbc.mongodb.net/GoFood";
const mongoDb = async () => {
  await mongoose.connect(mongoURL);
  console.log("Connected to db");
  const fetched_data = mongoose.connection.db.collection("food_items");
  const data = await fetched_data.find({}).toArray();
  console.log();
};
module.exports = mongoDb;
