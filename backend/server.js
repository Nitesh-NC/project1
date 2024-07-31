import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./src/config/db.js";
import userRouter from "./src/routes/userRoutes.js";
import 'dotenv/config'

//app config
const app = express(); // store instence of express app
const port = process.env.PORT || 4000;

//middlewares
app.use(express.json()); //whenever we get any request from frontend to backend, request will be parsed using this json method
app.use(cors()); //using this we can allow frontend to connect with backend

//db connections
connectDB()

//api endpoint
app.use("/api/user",userRouter)

//routes
app.get("/", (req, res) => res.send("api working")); //use thunderclient to check if this api works or not

app.listen(port, () => console.log(`server started on ${port}`)); //start app on port and pass callback function 
