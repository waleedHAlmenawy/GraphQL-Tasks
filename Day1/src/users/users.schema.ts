import * as mongoose from "mongoose"
export let usersSchema = new mongoose.Schema({

    name:String,
    age:Number,
    email:String,
   password:String,
   isAdmin:Boolean
})