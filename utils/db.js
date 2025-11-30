import mongoose from "mongoose";

export const mongodb = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL
    );
    console.log("connection db done successfully");
  } catch (error) {
    console.log("db connectio failed" + error);
  }
};