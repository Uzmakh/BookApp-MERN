const mongoose = require("mongoose");
const { config } = require("dotenv");
// copy the connection string from mongodb comapss

config(); // Load environment variables from .env file


const MONGODB_URI =
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/bookapp";
// mongoose.connect('mongodb://127.0.0.1:27017/myapp');
const connectToMongodb = () => {
    mongoose
        .connect(MONGODB_URI)
        // if promise fulfills
        .then(() => {
            console.log(`Connected to MongoDB at ${MONGODB_URI}`);
        })
        // if denies
        .catch((error) => {
            console.error(`Error connecting to MongoDB at ${MONGODB_URI}:`, error);
        });
};
module.exports = connectToMongodb;

