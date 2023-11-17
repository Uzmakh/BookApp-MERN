const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes/authRoutes')
const bookRoutes = require('./bookRoutes/bookRoutes')
const authcontrollers = require('../controllers/baseControllers')


// define base routes for your modules
// book routes
router.use('/api/v1/', bookRoutes)

// auth routes
router.use('/api/v1/', authRoutes);

module.exports = router;