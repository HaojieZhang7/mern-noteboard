import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://zhj3408237:wKkUx6F865jlZkbW@cluster0.pi9rkvx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.log();
  }
};
