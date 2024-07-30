import mongoose, { connect } from "mongoose";

 export const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("connected to db successfully "))
    }
    catch(error){
        console.log("something is wrong",error)
    }
}