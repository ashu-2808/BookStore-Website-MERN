import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";

// Log the current working directory
// console.log('Current directory:', process.cwd());

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;  // Updated to match the environment variable name

// Connect to MongoDB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to mongoDB"))
.catch(error => console.log("Error connecting to mongoDB: ", error));

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
