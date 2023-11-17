const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes/authRoutes.js')
const bookRoutes = require('./bookRoutes/bookRoutes.js')



// define base routes for your modules

// auth routes
router.use('/api/v1', authRoutes);

module.exports = router;