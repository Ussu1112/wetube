import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {
    useNewUrlParser: true,
    useFindAndModify:false,
    useUnifiedTopology: true
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connect to DB")

db.once("open",handleOpen)

const handleError = (error) => console.log(`Error on DB Connection:${error}`)

db.on("error", handleError);