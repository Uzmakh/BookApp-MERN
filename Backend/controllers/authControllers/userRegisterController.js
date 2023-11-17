const express = require('express');
const User = require("../../models/userModels");
const { validationResult } = require("express-validator");

const userRegisterController = async (req, res) => {
    // Catch data from input
    const {
        name, email, password
    } = req.body;

    // Checking the validations results
    console.log(name)
    try {
        console.log(req)
        }
catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = userRegisterController;