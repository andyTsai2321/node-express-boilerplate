const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, '請填寫姓名']
    },
    email: [
        {
            type: String,
            required: [true, '請填寫信箱'],
            unique: true,
            lowercase: true,
            select: false,
        }
    ],
    photo: {
        type: String
    },
    image: {
        type: String,
        default: ""
    },
    createAt: {
        type: Date,
        default: Date.now,
        select: false
    },
});

const User = mongoose.model(
    'User',
    userSchema
);

module.exports = User;