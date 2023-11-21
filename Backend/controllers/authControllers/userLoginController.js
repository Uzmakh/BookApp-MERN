const express = require("express")
const User = require("../../models/userModels")
const { validationResult } = require('express-validator');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const userLoginController = async (req, res) => {
    try {
        // to get the user login credentials
        //  object destructuring
        const { email, password } = req.body;
        // to check whether email exists or not
        const userExist = await User.findOne({ email: email });
        console.log(userExist);


        if (!userExist) {
            return res.status(400).json({ message: 'Invalid Credentials!' });
        }

        const passwordCompare = await bcrypt.compare(password, userExist.password);

        if (passwordCompare) {
            res.status(200).json({
                msg: 'Login Successful!',
                token: await newUser.generateToken(),
                userId: newUser._id.toString(),
            });
        } else {
            res.status(401).json({
                message: "Invalid email or password!"
            });
        };
        // Authentication through JWT
        // Extracting password and rest of the user data
       
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: ' Internal Server Error' });
    }
};

module.exports = userLoginController;