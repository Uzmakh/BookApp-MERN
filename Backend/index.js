const express = require("express");
const connectToMongodb = require("./config/db");
const cors = require("cors")
const { config } = require("dotenv");
config(); // Load environment variables from .env file
connectToMongodb()
const app = express();

app.use(cors())

// Middleware to parse JSON data from requests
app.use(express.json());




//default route
app.get('/', (req, res) => {
  res.send('Node Application!')
})
// default route has prefix now,
app.get("/api/v1/contact", (req, res) => {
  res.send("Hello From Node js server!");
});

// available routes
// do notice on base routes
app.use('/', require('./routes/baseRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})