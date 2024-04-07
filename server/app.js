import express from 'express';
import userRoute from './routes/user.js'
import { connectDB } from './utils/features.js';
import dotenv from 'dotenv'
import { errorMiddleware } from './middlerwares/error.js';
import cookieParser from "cookie-parser";

dotenv.config({
    path:"./.env"
})
const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3000;
const app = express();

connectDB(mongoURI)
app.use(express.json());
app.use(cookieParser());
app.use('/user', userRoute)
app.get("/", (req, res) => {
    res.send("Hello world")
})
app.use(errorMiddleware);
app.listen(3000, () => {
console.log("Server is running on port 3000")
})