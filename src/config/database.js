const mongoose = require("mongoose");

const connectDb = async function () {
  await mongoose.connect(
    "mongodb+srv://patelaryan5636_db_user:i7tKNf8cwiAaBm8B@mypersonaldatabase.kjlla10.mongodb.net/DevTinder",
  );
};

module.exports = { connectDb };
