const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userRegisterController = require("../../controllers/authControllers/userRegisterController");




// user register route
router.post("/register",
    [
        body("name", "Enter a valid name min 3 characters").isLength({
            min: 3,
        }),
        body("email", "Enter a valid email, must include @ and .com").isEmail(),
        body("password", "Password length min 5").isLength({
            min: 5
        }),
    ],
    userRegisterController);

// /api/v1//register

module.exports = router;