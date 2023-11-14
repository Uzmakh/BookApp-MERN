const express = require("express");
const connectToMongodb = require("./config/db");
const cors = require("cors")
const { config } = require("dotenv");
config(); // Load environment variables from .env file
// connectToMongodb()
const app = express();

app.use(cors())

const PORT = process.env.PORT;

//default rout
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//other routes
app.get('/api/v1/facebook', (req, res) => {
  res.send('Hello Facebook World!')
})
app.get('/api/v1/instagram', (req, res) => {
  res.send('Hello Instagram World!')
})


// Middleware to parse JSON data from requests
app.use(express.json());


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})