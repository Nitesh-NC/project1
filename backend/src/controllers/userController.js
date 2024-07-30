import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


//register user
const registerUser = async (req,res) => {
    //destructure data like name, email, password from the request body
    const {name,password,email} = req.body 
    
}

//login user
const loginUser = async (req, res) => {

};


export {registerUser, loginUser}
