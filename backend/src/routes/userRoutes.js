import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const userRouter = express.Router();

//now need data like email password to create user

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

export default userRouter;

// now go and setup this in server.js
