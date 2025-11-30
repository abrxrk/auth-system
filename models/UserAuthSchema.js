import { Schema } from "mongoose";
import mongoose from "mongoose";

const UserSchema = new Schema ({
    username: String , 
    email: String,
    password: String,
    isVerified: Boolean,
    token: String,
} , { timestamps: true })

export const User = mongoose.model("User" , UserSchema)