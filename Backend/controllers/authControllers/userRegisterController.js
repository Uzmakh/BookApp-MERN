const express = require('express');
const User = require("../../models/userModels");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const userRegisterController = async (req, res) => {
	// Extract data from the request
	// object destructuring
	const { name, email, password:password } = req.body;

	// checking the validation results
	// if there are errors,return bad request and errors
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.json({
			success: success,
			errors: errors.array()
		});
	}
	// controller logic
	try {
		// check whether the user with this email exists already
		let user = await User.findOne({ email: email });
		if (user) {
			return res
				.status(400)
				.json({ success, error: "user with this email already exists" });
		}

	// Save the user data in MongoDB
		// Create a new User instance with the extracted data
		const newUser = new User({
			name: name,
			email: email,
			password: password,
		});

		// save the new user to the database
		await newUser.save();

		// Respond with a success message
		res.status(201).json({ message: "User registered successfully", user: newUser });


		// API Testing through postman-data testing(same data)
		if (newUser) {
			return res.json({
				name: name,
				email: email,
				password: password,
			})
		} else {
			return res.json({ message: "user failed to register!" })
		}
	} catch (error) {
		// Handle any errors that occur during user registration
		return res.status(500).json({ error: error.message })
	}
}

module.exports = userRegisterController;

