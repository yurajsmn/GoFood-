const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://yurajsmn:L5L9hmzBpRP6kAQW@yuvraj.srcnsbc.mongodb.net/GoFood";
const mongoDb = async () => {
  await mongoose.connect(mongoURL);
  console.log("Connected to db");
  const fetched_data = mongoose.connection.db.collection("food_items");
  const data = await fetched_data.find({}).toArray();
  const foodCategory = mongoose.connection.db.collection("FoodCato");
  const catdata = await foodCategory.find({}).toArray();

  global.food_items = data;
  global.foodCategory = catdata;

  console.log("Global data loaded successfully");
};
module.exports = mongoDb;
