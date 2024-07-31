import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

const createToken = (id) => {
  //id is self generated in db
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//register user
const registerUser = async (req, res) => {
  //destructure data like name, email, password from the request body
  const { name, password, email } = req.body;
  try {
    //check is any user already exist with email id
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "user already exists" });
    }
    //validate email formate and password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "enter valid emial" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "password must be greater then 8 character",
      });
    }
    //convert password to hasspassword
    const salt = await bcrypt.genSalt(10); // limit 5-15, higher the value higher the time to encrypt
    const hashedPassword = await bcrypt.hash(password, salt); //provide password and salt , password will be hashed and saved in hashedPassword variable

    //create new user
    const newUser = new userModel({
      //getting this data from request.body
      name: name,
      email: email,
      password: hashedPassword,
    });
    //now save the user in database
    const user = await newUser.save();

    //take user id and generate one token
    const token = createToken(user._id);

    //now send token as response
    res.json({ success: true, token });
  } catch (error) {
    console.log("error", error);
    res.json({success:false, message:"error in registering user"})
  }
};

//login user
const loginUser = async (req, res) => {};

export { registerUser, loginUser };
