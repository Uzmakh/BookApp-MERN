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

const PORT = process.env.PORT;

//default rout
app.get('/', (req, res) => {
  res.send('Node Application!')
})

// available routes
app.use('/api/v1/', require('./routes/baseRoutes'));


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})