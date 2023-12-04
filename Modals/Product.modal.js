import mongoose, { Schema } from "mongoose";

const product = new Schema({
    name:String,
    price:String,
    image:Array,
    color:Array,
    Sizes:Array
})
export default mongoose.model("Product",product);