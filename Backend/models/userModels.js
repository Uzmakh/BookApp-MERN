const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
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

// secure the password with the bcrypt
userSchema.pre('save', async function(next){
    console.log("pre method", this);
    const user = this;

    if (!user.isModified("password")) {
       return next();
    }
// if password is generated for the first time
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound); 
        user.password = hash_password;
    } catch (error) {
      return next(error);
    }
});


const User = mongoose.model('users', userSchema);
module.exports = User;