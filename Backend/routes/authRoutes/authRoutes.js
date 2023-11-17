const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userRegisterController = require("../../controllers/authControllers/userRegisterController");

// user register route
router.post("/register", userRegisterController);

// /api/v1//register

module.exports = router;