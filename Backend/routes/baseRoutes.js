const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes/authRoutes')

// auth routes
router.use('/api/v1/', authRoutes);

module.exports = router;