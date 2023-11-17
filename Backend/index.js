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
// error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 5000;

//default route
app.get('/', (req, res) => {
  res.send('Node Application!')
})
// default route
app.get("/api/v1/contact", (req, res) => {
  res.send("Hello From Node js server!");
});

// available routes
// do notice on base routes
app.use('/', require('./routes/baseRoutes'));


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})