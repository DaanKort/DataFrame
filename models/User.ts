import mongoose = require('mongoose');
import bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        default: ''
    },
    lastName: {
        type: String,
        required: true,
        default: ''
    },
    email: {
        type: String,
        required: true,
        unique: true,
        default: ''
    },
    password: {
        type: String,
        required: true,
        default: ''
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

UserSchema.methods.generateHash = (password: string) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

UserSchema.methods.validPassword = (password: string) => {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
