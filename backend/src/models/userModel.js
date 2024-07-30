import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} },
  },{ minimize: false }); // if we don't add false then cartData will not be created beacuse we didn't provide any data above

  
// if model already created then that model will be used else it will create the model
const userModel = mongoose.model.user || mongoose.model("user", userSchema);

export default userModel;
