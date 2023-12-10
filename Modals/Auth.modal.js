import mongoose, { Schema } from "mongoose";

const user = new Schema({
    email:String,
    password:String,
    DOB:String,
    cart: [String]     
})

export default mongoose.model("User",user)