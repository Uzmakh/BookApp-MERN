const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    }
);

// json web token
userSchema.methods.generateToken = async function () {
try {
    return jwt.sign({
        userId: this._id.toString(),
        email: this.email,
    },
        process.env.JWT_SECTRET_KEY,
        {
            expiresIn: "30d",
        }
    );
} catch (error) {
    console.log(error);   
}
};


const User = mongoose.model('users', userSchema);
module.exports = User;